import { Request, Response} from 'express';
import ViaCEPService from '../service/ViaCEPService';

class ViaCEPController{        
    async postCEP(req: Request, res: Response){
        const {cep} = req.body;
        if(!cep)        
        return res.status(400).send("Você precisa passar um CEP com 8 números")
        return res.send(await ViaCEPService.getCEP(cep))
    }
}
export default new ViaCEPController();