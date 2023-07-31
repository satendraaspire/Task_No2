import { createAction, props } from '@ngrx/store';
import { ClientInformationType } from '../../client-information.interface';

export const setProgramDetailsData = createAction(
  '[ProgramDetails] Update',
  props<ClientInformationType>()
);
