export class Patient {
  mrn: string;
  firstName: string;
  lastName: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;

  constructor(object) {
    Object.assign(object);
  }
}
