module Types {
    public type CanisterData = {
        canisterId: Text;
        price: Float;
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