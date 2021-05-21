import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '../store';
import type { RootState } from '../store/modules/rootReducer';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
