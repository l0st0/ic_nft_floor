import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { UseSortTokensInterface } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSortTokens = ({ collection, sortVal }: UseSortTokensInterface) => {
  const sortedTokens = React.useMemo(() => {
    if (!collection) return [];

    const tokens = [...collection.tokens];

    switch (sortVal) {
      case 1: {
        return tokens.sort((a, b) => parseInt(a.index) - parseInt(b.index));
      }
      case 2: {
        return tokens.sort((a, b) => parseInt(b.index) - parseInt(a.index));
      }
      case 3: {
        return tokens.sort((a, b) => parseInt(a.nri) - parseInt(b.nri));
      }
      case 4: {
        return tokens.sort((a, b) => parseInt(b.nri) - parseInt(a.nri));
      }
    }

    return tokens;
  }, [collection, sortVal]);

  return { sortedTokens };
};
