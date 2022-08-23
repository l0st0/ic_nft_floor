import Float "mo:base/Float";
import Iter "mo:base/Iter";
import Map "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Types "Types"; 

actor {
    stable var priceData: Types.PriceData = {
        price = 0;
        date = "";
    };

    stable var canisters: [Types.Canisters] = [];

    public query func getCanisters() : async [Types.Canisters] {
        return canisters;
    };

    public func updateCanisters(data: [Types.Canisters]) : async [Types.Canisters] {
        canisters := data;

        return data;
    };

    public query func getPrice() : async Types.PriceData {
        return priceData;
    };

    public func updatePrice(data: Types.PriceData) : async Types.PriceData {
        priceData := data;

        return data;
    };
};
 