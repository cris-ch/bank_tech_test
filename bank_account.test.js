const { it, expect } = require("@jest/globals");
const BankAccount = require("./bank_account");

const bank_account = new BankAccount;

describe("BankAccount", () => {
  it("starts with an initial balance of £0", () => {
    expect(bank_account.getBalance()).toEqual(0)
  });

  it("accepts a deposit", () => {
    bank_account.deposit(500)
    expect(bank_account.getBalance()).toEqual(500)
  })
  
})