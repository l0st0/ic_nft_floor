import Float "mo:base/Float";

actor {
    public type PriceData = {
        price: Float;
        date: Text;
    };

    stable var priceData: PriceData = {
        price = 0;
        date = "";
    };

    public query func getPrice() : async PriceData {
        return priceData;
    };

    public func updatePrice(actualPrice: Float, today: Text) : async  PriceData {
        let toReturn: PriceData = {
            price = actualPrice;
            date = today;
        };

        priceData := toReturn;

        return toReturn;
    }
}
