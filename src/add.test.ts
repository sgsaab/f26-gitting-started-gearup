import { add2 } from './add';

test("test tests", () => {
  expect(true);
});

test("basic add2", () => {
  const a = 1;
  const b = 1;
  expect(add2(a, b)).toEqual(2);
});

test("negatives add2", () => {
  const a = -23;
  const b = -39;
  expect(add2(a, b)).toEqual(-62);
});

// TODO
test("bad inputs add2", () => {
  const a = 1;
  const b = 1;
  expect(add2(a, b)).toEqual(2);
});
