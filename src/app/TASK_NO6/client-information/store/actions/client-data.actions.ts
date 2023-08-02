import { createAction, props } from '@ngrx/store';
import {
  ClientDetailsType,
  ClientInformationType,
  LinkedProgramType,
} from '../../client-information.interface';

export const setClientData = createAction(
  '[ClientData] Update',
  props<ClientInformationType>()
);

export const setClientDetails = createAction(
  '[ClientDetails] Update',
  props<ClientDetailsType>()
);

export const setLinkedProgram = createAction(
  '[LinkedProgram] Update',
  props<LinkedProgramType>()
);
