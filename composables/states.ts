export const useIsLoading = () => useState<boolean>('isLoading', () => false);
export const useIsHidden = () => useState<boolean>('isHidden', () => false);
export const useToken = () => useState<any>('token', () => localStorage.getItem('token'));
export const useUser = () => useState<any>('user', () => null);
export const useTrade = () => useState<any>('trade', () => []);
export const useBillTypes = () => useState<any>('billTypes', () => []);
export const useBanks = () => useState<any>('banks', () => []);
export const useCustomers = () => useState<any>('customers', () => []);