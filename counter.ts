/* eslint-disable @typescript-eslint/no-inferrable-types */
import { env, Pack } from "ask-lang";
import { safeMath } from "./SafeMath";

@spreadLayout
@packedLayout
export class Counter {
  value: u8;
  oldValue: u8;
  constructor(value: u8 = 0) {
    this.value = value;
    this.oldValue = 0;
  }
}

@contract
export class Contract {
  _data: Pack<Counter>;

  constructor() {
    this._data = instantiate<Pack<Counter>>(new Counter(0));
  }

  get data(): Counter {
    return this._data.unwrap();
  }

  set data(data: Counter) {
    this._data = new Pack(data);
  }

  @constructor()
  default(value: u8): void {
    this.data.value = value;
  }

  @message({ mutates: true })
  add(number: u8): void {
    this.data.oldValue = this.data.value;
    this.data.value = safeMath.safeAdd(this.data.value, number);
  }

  @message({ mutates: true })
  sub(number: u8): void {
    this.data.oldValue = this.data.value;
    this.data.value = safeMath.safeSub(this.data.value, number);
  }

  @message({ mutates: true })
  mul(number: u8): void {
    this.data.oldValue = this.data.value;
    this.data.value = safeMath.safeMul(this.data.value, number);
  }

  @message({ mutates: true })
  div(number: u8): void {
    this.data.oldValue = this.data.value;
    this.data.value = safeMath.safeDiv(this.data.value, number);
  }

  @message({ mutates: true })
  mod(number: u8): void {
    this.data.oldValue = this.data.value;
    this.data.value = safeMath.safeMod(this.data.value, number);
  }

  @message({ mutates: true })
  reset(): void {
    this.data.oldValue = 0;
    this.data.value = 0;
  }

  @message()
  getValue(): u8 {
    return this.data.value;
  }

  @message()
  getOldValue(): u8 {
    return this.data.oldValue;
  }
}
