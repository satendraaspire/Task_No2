import { createReducer, on } from '@ngrx/store';
import { programsData } from '../constant/clients-initial-data.constant';
import { setProgramDetailsData } from '../actions/program-management.actions';
import { ClientInformationType } from '../../client-information.interface';

export const programInitialState: ClientInformationType[] = programsData;

export const programsReducer = createReducer<ClientInformationType[]>(
  programInitialState,
  on(setProgramDetailsData, (state, { type, ...rest }) => {
    return [...state, { ...rest }];
  })
);
