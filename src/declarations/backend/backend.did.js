export const idlFactory = ({ IDL }) => {
  const CanisterData = IDL.Record({
    'price' : IDL.Float64,
    'canisterId' : IDL.Text,
  });
  const Stats = IDL.Record({
    'data' : IDL.Vec(CanisterData),
    'time' : IDL.Text,
  });
  const PriceData = IDL.Record({ 'date' : IDL.Text, 'price' : IDL.Float64 });
  return IDL.Service({
    'addStats' : IDL.Func([Stats], [], []),
    'getPrice' : IDL.Func([], [PriceData], ['query']),
    'getStat' : IDL.Func([IDL.Text], [IDL.Opt(Stats)], ['query']),
    'getStats' : IDL.Func([], [IDL.Vec(Stats)], ['query']),
    'updatePrice' : IDL.Func([PriceData], [PriceData], []),
  });
};
export const init = ({ IDL }) => { return []; };
