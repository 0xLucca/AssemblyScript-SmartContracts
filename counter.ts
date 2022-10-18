/* eslint-disable @typescript-eslint/no-inferrable-types */
import { env, Pack } from "ask-lang";
import { Result, add, sub, mul, div, mod } from "./SafeMath";

@spreadLayout
@packedLayout
export class Counter {
  value: u8;
  constructor(value: u8 = 0) {
    this.value = value;
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
  modify(number: u8): void {
    const result = add(this.data.value, number);
    if (result.flag) {
      this.data.value = result.value;
    }
  }

  @message()
  get(): u8 {
    return this.data.value;
  }
}
