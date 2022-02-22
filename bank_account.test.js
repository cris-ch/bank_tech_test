const { it, expect } = require("@jest/globals");
const BankAccount = require("./bank_account");

const bank_account = new BankAccount;

describe("BankAccount", () => {
  it("starts with an initial balance of £0", () => {
    expect(bank_account.getBalance()).toEqual(0)
  });

  it("accepts a deposit", () => {
    bank_account.deposit(500, '10/02/2022')
    expect(bank_account.getBalance()).toEqual(500)
  })

  it("accepts a withdrawal", () => {
    bank_account.withdrawal(300, '13/02/22')
    expect(bank_account.getBalance()).toEqual(200)
  })
  
  it("prints a statement with account movements", () => {
    expect(bank_account.printStatement()).toContain("10/02/2022 || 500.00 || || 500.00")
    expect(bank_account.printStatement()).toContain("13/02/22 || || 300.00 || 200.00")
  })

  it("prints a statement with a header", () => {
    expect(bank_account.printStatement()).toContain("date || credit || debit || balance")
  })

  it("prints 'No transactions' if no transactions", () => {
    var bank_account = new BankAccount;
    expect(bank_account.printStatement()).toContain("date || credit || debit || balance\nNo transactions")
  })

})

