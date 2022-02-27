module Types {
    public type CanisterData = {
        canisterId: Text;
        price: Float;
    };
    
    public type Stats = {
        data: [CanisterData];
        time: Text;
    };

    public type PriceData = {
        price: Float;
        date: Text;
    };

    public type Canisters = {
        name: Text;
        canister: Text;
    };
}