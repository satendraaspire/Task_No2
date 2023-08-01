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
} from '../constant/clients-initial-data.constant';
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
  on(setClientData, (state, { ...rest }) => {
    return [...state, { ...rest }];
  })
);

export const clientDetailsReducer = createReducer<ClientDetailsType[]>(
  clientDetailsInitialState,
  on(setClientDetails, (state, { ...rest }) => {
    return [...state, { ...rest }];
  })
);

export const linkedProgramReducer = createReducer<LinkedProgramType[]>(
  linkedProgramInitialState,
  on(setLinkedProgram, (state, {...rest }) => {
    return [...state, { ...rest }];
  })
);
