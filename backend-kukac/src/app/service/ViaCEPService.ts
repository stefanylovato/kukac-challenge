import axios from "axios";

class ViaCEPService {
     getCEP = async (ceps: Array<number | string>) => {
        const usingCeps = ceps.map(async (numbers) => {
            try{
                return await axios.get(`https://viacep.com.br/ws/${numbers}/json`)
            }catch(error){
                return {
                    data: `${numbers}: CEP inválido`
                }
            }
        }
        );
        const result = await Promise.all(usingCeps)
        const arrCeps: Array<number | string> = []
        result.map(cep => arrCeps.push(cep?.data))
        return arrCeps;
    }
    }
export default new ViaCEPService();