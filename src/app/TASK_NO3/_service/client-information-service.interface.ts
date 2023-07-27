export interface ClientInformationType {
  id: number | string;
  name: string;
}

export interface LinkedProgramType {
  clientId: number | string;
  programId: number | string;
}

export interface ClientDetailsType {
  clientId: number | string;
  designation: string;
  department: string;
}
