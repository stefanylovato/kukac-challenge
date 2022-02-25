import { Request, Response} from 'express';
import PalindromeService from "../service/PalindromeService";

class PalindromeController {
    palindromeList = (req: Request, res: Response) => {
        if(req.body.initialNumber > req.body.finalNumber){
            return res.status(400).send("O número inicial precisa ser menor que o número final")
        }

        res.send(PalindromeService.allPalindromes(req.body.initialNumber, req.body.finalNumber))
    }
}

export default new PalindromeController();
