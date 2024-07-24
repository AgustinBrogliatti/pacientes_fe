export class Patient {
  dni: number;
  name: string;
  lastname: string;
  birthDate: string;
  phoneNumber: string;
  address: string;
  email: string;

  constructor(
    dni: number,
    name: string,
    lastname: string,
    birthDate: string,
    phoneNumber: string,
    address: string,
    email: string
  ) {
    this.dni = dni;
    this.name = name;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.email = email;
  }
}
