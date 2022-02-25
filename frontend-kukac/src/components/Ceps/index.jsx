import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Cep from './Cep';
import axios from 'axios';

 export const Ceps = () => {
    const [cepsList, setCepsList] = useState([]);
    
    const handleSubmit = async ({ cep1, cep2, cep3, cep4, cep5 }) => {
        const ceps = [cep1, cep2, cep3, cep4, cep5]
        try{
            const { data } = await axios.post("http://localhost:8080/cep", {
                cep: [
                    cep1,
                    cep2,
                    cep3,
                    cep4,
                    cep5
                ]
            })
            setCepsList(data)
        } catch (error){
            console.log(error)
        }
    };

    return (
        <>
        <div className="container background-container mt-5" >
        <h5 className='text-center mb-4'>Search a Zip Code</h5>
        <div>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{ cep1: '', cep2: '', cep3:'', cep4:'', cep5:'' }}
            render={({ isValid }) => (
            <Form className="container d-flex flex-column align-items-center gap-3">
            <p>Enter 05 zip codes:</p>
            <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >CEP:</label>
                    <Field name="cep1" required-type="number" id='cep1' autoComplete='off' minLength={8} maxLength={8} className='values p-2' />
                    <label >CEP:</label>
                    <Field name="cep2" required-type="number" id='cep2' autoComplete='off' minLength={8} maxLength={8} className='values p-2' />
                    <label >CEP:</label>
                    <Field name="cep3" required-type="number" id='cep3' autoComplete='off' minLength={8} maxLength={8} className='values p-2' />
                    <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >CEP:</label>
                    <Field name="cep4" required-type="number" id='cep4' autoComplete='off' minLength={8} maxLength={8} className='values p-2' />
                    <label >CEP:</label>
                    <Field name="cep5" required-type="number" id='cep5' autoComplete='off' minLength={8} maxLength={8} className='values p-2' />                   
                    </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary mt-2 mb-4" type="submit">Submit</button>
                </div>
            <div className="container d-flex justify-content-center align-items-center gap-3">
                {cepsList.map(({ cep, logradouro, bairro, localidade, uf}, idx) => {
                    return (
                        <Cep 
                        key={idx}
                        cep={cep}
                        logradouro={logradouro}
                        bairro={bairro}
                        localidade={localidade}
                        uf={uf}
                        />
                    );
                })}
            </div>
            </Form>
            )}
        />
        </div>
        </div>
        </>
    );
}

export default Ceps;