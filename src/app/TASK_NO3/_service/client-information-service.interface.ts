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
