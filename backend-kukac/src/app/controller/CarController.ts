import { Request, Response} from 'express';
import Car from '../service/CarService';
const { database } = require('../repository/database');

class CarController {
    addCar = (req: Request, res: Response) =>{
        const { model, year, doors, brand } = req.body
        database.cars.push(new Car(model, year, doors, brand))
        return res.send(database.cars)
    }
    showCatalog = (req: Request, res: Response) => {
        return res.send(database.cars)
    }
}
export default new CarController();