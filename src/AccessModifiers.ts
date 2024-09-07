{
    // access modifiers

    class BankAccount{
        public readonly id:number;
        public name:string;
        protected balance:number;

        constructor(id:number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        getBalance(){
            return this.balance;
        }
        addDeposit(amount: number) {
            this.balance += amount;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.balance
        }
    }

    const goribManusherAccount = new BankAccount(111324123, "MD. Tanvir", 20);

    goribManusherAccount.addDeposit(100);
    const myBalance = goribManusherAccount.getBalance
    console.log(myBalance);
    
}