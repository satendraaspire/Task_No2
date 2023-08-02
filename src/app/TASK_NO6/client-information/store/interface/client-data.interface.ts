import {
  ClientInformationType,
  ClientDetailsType,
  LinkedProgramType,
} from '../../client-information.interface';

export interface RootState {
  clientData: ClientInformationType[];
  clientDetailsData: ClientDetailsType[];
  linkedProgramData: LinkedProgramType[];
  programData: ClientInformationType[];
}
