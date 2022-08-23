export const idlFactory = ({ IDL }) => {
  const Canisters = IDL.Record({ 'name' : IDL.Text, 'canister' : IDL.Text });
  const PriceData = IDL.Record({ 'date' : IDL.Text, 'price' : IDL.Float64 });
  return IDL.Service({
    'getCanisters' : IDL.Func([], [IDL.Vec(Canisters)], ['query']),
    'getPrice' : IDL.Func([], [PriceData], ['query']),
    'updateCanisters' : IDL.Func(
        [IDL.Vec(Canisters)],
        [IDL.Vec(Canisters)],
        [],
      ),
    'updatePrice' : IDL.Func([PriceData], [PriceData], []),
  });
};
export const init = ({ IDL }) => { return []; };
