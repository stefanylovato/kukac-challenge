import { Request, Response} from 'express';
import ChangeService from "../service/ChangeService";

class ChangeController {
    purchase = (req: Request, res: Response) => {
        if(req.body.productValue <= 0 || req.body.payment <= 0)
        return res.status(400).send("O valor do produto e o valor do pagamento precisam ser maiores que 0.")
        if(req.body.payment < req.body.productValue){
            return res.status(400).send("O valor de pagamento precisa ser maior que o valor do produto.")
        }
        return res.send(ChangeService.calculateChange(req.body.productValue, req.body.payment))
    }
}
export default new ChangeController();