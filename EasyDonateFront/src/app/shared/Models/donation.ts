import { User } from "./user";

export class Donation {
    id: number =0;
    sum: number =0;
    donationDate = new Date()
    userRef: User ={
        id:1,
        firstName:"sahar",
        lastName:"mili"
    }
}
