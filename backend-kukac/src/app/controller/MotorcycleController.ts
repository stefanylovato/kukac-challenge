import { Request, Response} from 'express';
import Motorcycle from '../service/MotorcycleService';
const { database } = require('../repository/database')

class MotorcycleController {
    addMoto = (req: Request, res: Response) =>{
        const { model, year, brand, wheels, passenger } = req.body
        database.motorcycles.push(new Motorcycle(model, year, brand, wheels, passenger))
        return res.send(database.motorcycles)
    }
    showCatalog = (req: Request, res: Response) => {
        return res.send(database.motorcycles)
    }
}
export default new MotorcycleController();