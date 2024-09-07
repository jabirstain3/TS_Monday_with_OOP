{
    // Gatter and Setter

    class BankAccount{
        public readonly id:number;
        public name:string;
        protected _balance:number;

        constructor(id:number, name: string, balance: number){
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
        get balance(){
            return this._balance;
        }

        // setter
        set deposit(amount: number){
            this._balance += amount;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.balance
        }
    }

    const goribManusherAccount = new BankAccount(111324123, "MD. Tanvir", 20);

    // goribManusherAccount.addDeposit(100);
    goribManusherAccount.deposit = 50;
    
    // const myBalance = goribManusherAccount.getBalance
    const myBalance = goribManusherAccount.balance
    
    console.log(myBalance);
    
}