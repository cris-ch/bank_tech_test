class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push(
        {date: date, credit: amount, debit: 0, balance: this.balance},
    );
  }

  withdrawal(amount, date) {
    this.balance -= amount;
    this.transactions.push(
        {date: date, credit: 0, debit: amount, balance: this.balance},
    );
  }

  printStatement() {
    const header = 'date || credit || debit || balance' + '\n';
    const body = this.transactions.length ?
    this.transactions.reverse().map((transaction) => {
      if (transaction.credit > 0) {
        return transaction.date + ' || ' + transaction.credit + '.00 || || ' +
          transaction.balance + '.00\n';
      }
      if (transaction.debit > 0) {
        return transaction.date + ' || || ' + transaction.debit + '.00 || ' +
          transaction.balance + '.00\n';
      }
    }).join('') : 'No transactions';
    console.log(header + body);
    return header + body;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;

