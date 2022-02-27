export const idlFactory = ({ IDL }) => {
  const CanisterData = IDL.Record({
    'price' : IDL.Float64,
    'canisterId' : IDL.Text,
  });
  const Stats = IDL.Record({
    'data' : IDL.Vec(CanisterData),
    'time' : IDL.Text,
  });
  const Canisters = IDL.Record({ 'name' : IDL.Text, 'canister' : IDL.Text });
  const PriceData = IDL.Record({ 'date' : IDL.Text, 'price' : IDL.Float64 });
  return IDL.Service({
    'addStats' : IDL.Func([Stats], [], []),
    'getCanisters' : IDL.Func([], [IDL.Vec(Canisters)], ['query']),
    'getPrice' : IDL.Func([], [PriceData], ['query']),
    'getStat' : IDL.Func([IDL.Text], [IDL.Opt(Stats)], ['query']),
    'getStats' : IDL.Func([], [IDL.Vec(Stats)], ['query']),
    'updateCanisters' : IDL.Func(
        [IDL.Vec(Canisters)],
        [IDL.Vec(Canisters)],
        [],
      ),
    'updatePrice' : IDL.Func([PriceData], [PriceData], []),
  });
};
export const init = ({ IDL }) => { return []; };
