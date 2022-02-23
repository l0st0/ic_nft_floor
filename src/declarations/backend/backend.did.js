export const idlFactory = ({ IDL }) => {
  const PriceData = IDL.Record({ 'date' : IDL.Text, 'price' : IDL.Float64 });
  return IDL.Service({
    'getPrice' : IDL.Func([], [PriceData], ['query']),
    'updatePrice' : IDL.Func([IDL.Float64, IDL.Text], [PriceData], []),
  });
};
export const init = ({ IDL }) => { return []; };
