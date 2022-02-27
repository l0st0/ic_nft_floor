import Map "mo:base/HashMap";
import Iter "mo:base/Iter";
import Float "mo:base/Float";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
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

    // Stats
    stable var entriesStats : [(Text, Types.Stats)] = [];
    let mapStats = Map.fromIter<Text,Types.Stats>(entriesStats.vals(), 10, Text.equal, Text.hash);

    public func addStats(data: Types.Stats): async () {
        mapStats.put(data.time, data);
    };

    public query func getStat(key: Text) : async ?Types.Stats {
        return mapStats.get(key);
    };

    public query func getStats() : async [Types.Stats] {
        var iter: Iter.Iter<Types.Stats> = mapStats.vals();
        
        return Iter.toArray(iter);
    };

    system func preupgrade() {
        entriesStats := Iter.toArray(mapStats.entries());
    };

    system func postupgrade() {
        entriesStats := [];
    };
};
 