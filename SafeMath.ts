export namespace safeMath {
  export function safeAdd(a: u8, b: u8): u8 {
    const c: u8 = a + b;
    assert(c >= a);
    return c;
  }

  export function safeSub(a: u8, b: u8): u8 {
    assert(a >= b);
    const c = a - b;
    return c;
  }

  export function safeMul(a: u8, b: u8): u8 {
    if (a == 0) {
      return 0;
    }
    const c: u8 = a * b;

    assert(c / a == b);
    return c;
  }

  export function safeDiv(a: u8, b: u8): u8 {
    assert(b > 0);
    const c: u8 = a / b;
    return c;
  }

  export function safeMod(a: u8, b: u8): u8 {
    assert(b != 0);
    const c: u8 = a % b;
    return c;
  }
}