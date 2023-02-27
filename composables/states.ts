export const useIsLoading = () => useState<boolean>('isLoading', () => false);
export const useIsHidden = () => useState<boolean>('isHidden', () => false);
export const useToken = () => useState<any>('token', () => localStorage.getItem('token'));
export const useUser = () => useState<any>('user', () => null);
export const useActivity = () => useState<any>('activity', () => []);
export const useTrade = () => useState<any>('trade', () => []);