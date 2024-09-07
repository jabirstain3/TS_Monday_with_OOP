"use strict";
{
    // Gatter and Setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // getBalance(){
        //     return this._balance;
        // }
        // addDeposit(amount: number) {
        //     this._balance += amount;
        // }
        //getter
        get balance() {
            return this._balance;
        }
        // setter
        set deposit(amount) {
            this._balance += amount;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
    }
    const goribManusherAccount = new BankAccount(111324123, "MD. Tanvir", 20);
    // goribManusherAccount.addDeposit(100);
    goribManusherAccount.deposit = 50;
    // const myBalance = goribManusherAccount.getBalance
    const myBalance = goribManusherAccount.balance;
    console.log(myBalance);
}
