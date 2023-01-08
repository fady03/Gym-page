const { dafault: TestRunner } = require ('jest-runner');
const add5 = require ('./add5');
test ('returns the num plus five' , () => {
    expect(add5(1)).toBe(6);
})