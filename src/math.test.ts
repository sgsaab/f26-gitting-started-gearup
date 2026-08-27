import { add2, sub2 } from './math';

describe("add2", () => {
  test("adds positive numbers", () => {
    expect(add2(1, 1)).toEqual(2);
  });

  test("adds negative numbers", () => {
    expect(add2(-23, -39)).toEqual(-62);
  });

  test("adds zero", () => {
    expect(add2(42, 0)).toEqual(42);
  });
});

describe("sub2", () => {
  test("subtracts positive numbers", () => {
    expect(sub2(1, 1)).toEqual(0);
  });

  test("subtracts negative numbers", () => {
    expect(sub2(-23, -39)).toEqual(16);
  });

  test("subtracts zero", () => {
    expect(sub2(42, 0)).toEqual(42);
  });
});