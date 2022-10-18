export class Result {
  flag: bool;
  value: u8;
  constructor(flag: bool, value: u8) {
    this.flag = flag;
    this.value = value;
  }
}

export function add(a: u8, b: u8): Result {
  let c: u8 = a + b;
  if (c < a) {
    return new Result(false, 0);
  }
  return new Result(true, c);
}

export function sub(a: u8, b: u8): Result {
  if (b > a) {
    return new Result(false, 0);
  }
  return new Result(true, a - b);
}

export function mul(a: u8, b: u8): Result {
  if (a == 0) {
    return new Result(true, 0);
  }
  let c: u8 = a * b;
  if (c / a != b) {
    return new Result(false, 0);
  }
  return new Result(true, c);
}

export function div(a: u8, b: u8): Result {
  if (b == 0) {
    return new Result(false, 0);
  }
  return new Result(true, a / b);
}

export function mod(a: u8, b: u8): Result {
  if (b == 0) {
    return new Result(false, 0);
  }
  return new Result(true, a % b);
}
