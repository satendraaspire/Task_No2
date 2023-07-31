import { createReducer, on } from '@ngrx/store';
import { programsData } from '../constant/clients-data.constant';
import { setProgramDetailsData } from '../actions/program-management.actions';
import { ClientInformationType } from '../../client-information.interface';

export const programInitialState: ClientInformationType[] = programsData;

export const programsReducer = createReducer<ClientInformationType[]>(
  programInitialState,
  on(setProgramDetailsData, (state, { type, ...rest }) => {
    console.log(state);
    return [...state, { ...rest }];
  })
);
