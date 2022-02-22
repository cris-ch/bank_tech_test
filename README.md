#Bank Tech Test

## SPECIFICATION

### Requirements
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement
- Then she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


## USER STORIES

```
As a Bank User
So that I can move my money around
I would like to have a bank account

As a Bank User
So that I can have my money available
I would like to deposit to my bank account

As a Bank User
So that I can spend my money
I would like to withdraw from my bank account

As a Bank User
So that I know the movements on my account
I would like to have a bank statement
```

## DOMAIN MODEL

![Domain Model](/img/domain_model.png?raw=true "Domain Model")

## IMPLEMENTATION
Created a BankAccount class.
With 4 methods:

- 'getBalance', returns current balance of account.
- 'deposit', for the user to deposit money into account. Takes two parameters: amount and date of transaction.
- 'withdrawal'  for the user to withdraw money from account. Takes two parameters: amount and date of transaction.
- 'printStatement', prints the account statement according to the acceptance criteria.

Since the

## TESTS TO PASS

✓ starts with an initial balance of £0  
✓ accepts a deposit  
✓ accepts a withdrawal  
✓ prints a statement with account movements  
✓ prints a statement with a header  
✓ prints 'No transactions' if no transactions   

Since the "Acceptance Criteria" doesn't mention that the account can't go negative, I assumed that it's possible, and didn't test for the case of withdrawing more than the current balance.

## EXTRA INFO
### Focus for this challenge  
The focus for this challenge is to write high-quality code.

In order to do this, I'm paying particular attention to the following:

*Using diagramming to plan my approach to the challenge  
*TDD my code  
*Focus on testing behavior rather than state  
*Commit often, with good commit messages  
*Single Responsibility Principle and encapsulation  
*Clear and readable code  