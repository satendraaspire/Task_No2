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
import { RootState } from './interface/client-data.interface';

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
    const combinedState = reducer(state, action);
    sessionStorage.setItem('store', JSON.stringify(combinedState));
    return combinedState;
  };
};

export const metaReducers: MetaReducer[] = [combinedReducers];
