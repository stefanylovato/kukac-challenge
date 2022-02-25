import { Vehicle } from "../model/IVehicle";

class Car implements Vehicle {
    model: string;
    year: number;
    doors: number;
    brand: string;

    constructor(model: string, year: number, doors: number, brand: string){
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.brand = brand;
    }
}
export default Car;