import { TypeDocument } from './typeDocument.interface';
export interface Customer {
  id?: string;
  name: string;
  lastname: string;
  birthdate: Date;
  typeDocument:TypeDocument;
  numberDocument: string;
  phone: string;
  email: string;
  status: boolean;
}
