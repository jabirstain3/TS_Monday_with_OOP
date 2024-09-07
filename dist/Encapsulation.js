"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        getBalance() {
            return this.balance;
        }
        addDeposit(amount) {
            this.balance += amount;
        }
        getHidden() {
            return this.getBalance();
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
    }
    const goribManusherAccount = new BankAccount(111324123, "MD. Tanvir", 20);
    goribManusherAccount.addDeposit(100);
    const myBalance = goribManusherAccount.getHidden;
    console.log(myBalance);
}
