// lib\stores\currencyStore.ts
import ExchangeInfo from '@/components/ExchangeInfo/ExchangeInfo';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ExchangeInfo {
  to: string;
  from: string;
  amount: string;
  rate: number;
  result: number;
}

interface CurrencyStore {
  baseCurrency: string;
  hasHydrated: boolean;
  exchangeInfo: ExchangeInfo | null;
  isLoading: boolean;
  isError: string | null;
  setBaseCurrency: (currency: string) => void;
  setHasHydrated: (isHydrated: boolean) => void;
  setExchangeInfo: (info: ExchangeInfo) => void;
  setIsLoading: (loading: boolean) => void;
  setIsError: (error: string | null) => void;
}

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      baseCurrency: '',
      hasHydrated: false,
      exchangeInfo: null,
      isLoading: false,
      isError: null,
      setBaseCurrency: (currency) => set({ baseCurrency: currency }),
      setHasHydrated: (state) => set({ hasHydrated: state }),
      setExchangeInfo: (info) => set({ exchangeInfo: info }),
      setIsLoading: (loading) => set({ isLoading: loading }),
      setIsError: (error) => set({ isError: error }),
    }),
    {
      name: 'currency-storage',
      partialize: (state) => ({ baseCurrency: state.baseCurrency }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
