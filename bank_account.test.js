const BankAccount = require("./bank_account");

const bank_account = new BankAccount;

describe("BankAccount", () => {
  it("starts with an initial balance of £0", () => {
    expect(bank_account.getBalance()).toEqual(0)
  });

})