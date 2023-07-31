import {
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer,
  UPDATE,
} from '@ngrx/store';
import {
  clientDetailsReducer,
  employeeReducer,
  linkedProgramReducer,
} from './reducer/client-data.reducer';
import { programsReducer } from './reducer/program-management.reducer';
import {
  ClientInformationType,
  ClientDetailsType,
  LinkedProgramType,
} from '../client-information.interface';

export interface RootState {
  clientData: ClientInformationType[];
  clientDetailsData: ClientDetailsType[];
  linkedProgramData: LinkedProgramType[];
  programData: ClientInformationType[];
}

export const reducers: ActionReducerMap<RootState> = {
  clientData: employeeReducer,
  clientDetailsData: clientDetailsReducer,
  linkedProgramData: linkedProgramReducer,
  programData: programsReducer,
};

const combinedReducers = (
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = sessionStorage.getItem('store');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          sessionStorage.removeItem('store');
        }
      }
    }
    const nextState = reducer(state, action);
    sessionStorage.setItem('store', JSON.stringify(nextState));
    return nextState;
  };
};

export const metaReducers: MetaReducer[] = [combinedReducers];
