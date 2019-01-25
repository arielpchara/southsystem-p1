export interface Address {
  street: string;
  number: number;
}
export interface User {
  name: string;
  email: string;
  address: Address;
 roles: string[];
}
