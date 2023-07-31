import { createReducer, on } from '@ngrx/store';
import {
  setClientData,
  setClientDetails,
  setLinkedProgram,
} from '../actions/client-data.actions';
import {
  clientDetailsData,
  clientLinkedProgramsData,
  clientsData,
} from '../constant/clients-data.constant';
import {
  ClientInformationType,
  ClientDetailsType,
  LinkedProgramType,
} from '../../client-information.interface';

export const initialState: ClientInformationType[] = clientsData;
export const clientDetailsInitialState: ClientDetailsType[] = clientDetailsData;
export const linkedProgramInitialState: LinkedProgramType[] =
  clientLinkedProgramsData;

export const employeeReducer = createReducer<ClientInformationType[]>(
  initialState,
  on(setClientData, (state, { type, ...rest }) => {
    console.log(state);
    return [...state, { ...rest }];
  })
);

export const clientDetailsReducer = createReducer<ClientDetailsType[]>(
  clientDetailsInitialState,
  on(setClientDetails, (state, { type, ...rest }) => {
    console.log('store data', { ...state, ...rest });
    return [...state, { ...rest }];
  })
);

export const linkedProgramReducer = createReducer<LinkedProgramType[]>(
  linkedProgramInitialState,
  on(setLinkedProgram, (state, { type, ...rest }) => {
    console.log('store data', { ...state, ...rest });
    return [...state, { ...rest }];
  })
);
