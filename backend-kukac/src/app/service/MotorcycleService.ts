import { Vehicle } from "../model/IVehicle";

class Motorcycle implements Vehicle {
    model: string;
    year: number;
    brand: string;
    wheels: number;
    passenger: number;

    constructor(model: string, year: number, brand: string, wheels: number, passenger: number){
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.wheels = 2;
        this.passenger = passenger;
    }
}
export default Motorcycle;