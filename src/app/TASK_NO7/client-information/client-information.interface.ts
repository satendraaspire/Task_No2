export interface ClientInformationType {
  id: number;
  name: string;
}

export interface LinkedProgramType {
  clientId: number;
  programId: number;
}

export interface ClientDetailsType {
  clientId: number;
  designation: string;
  department: string;
}

export interface LoginType {
  username: string;
  password: string;
}

export interface ProgramCombinedArrays {
  id: number;
  name: string;
  linkedClient: string[];
}

export interface ClientCombinedArrays {
  id: number;
  name: string;
  designation: string;
  department: string;
  linkedPrgram: string[];
}
