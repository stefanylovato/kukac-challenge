import { Router } from "express";
import PalindromeController from "../src/app/controller/PalindromeController";
import ChangeController from "../src/app/controller/ChangeController";
import ViaCEPController from "../src/app/controller/ViaCEPController";
import CarController from "./app/controller/CarController";
import MotorcycleController from "./app/controller/MotorcycleController";

const router = Router();

router.post('/palindrome', PalindromeController.palindromeList)
router.post('/purchase', ChangeController.purchase)
router.get('/car', CarController.showCatalog)
router.post('/car', CarController.addCar)
router.get('/motorcycle', MotorcycleController.showCatalog)
router.post('/motorcycle', MotorcycleController.addMoto)
router.post('/cep', ViaCEPController.postCEP)

export {router};