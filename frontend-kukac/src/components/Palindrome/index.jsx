import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Palindrome = () => {  
    const handleSubmit = async ({ initialNumber, finalNumber }) => {
        const res = document.querySelector('[data-js="res"]')
        if(initialNumber > finalNumber){
            res.innerText = "The last number must be bigger than the first number";
            return
        }

        if(initialNumber < 10){
            res.innerText = "Must be a number with two digits or more";
            return
        }
        
        try{
            const { data } = await axios.post("http://localhost:8080/palindrome", {
                initialNumber, 
                finalNumber
                });
                res.innerText = data.join(' - ');
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="container background-container mt-5" >
        <h5 className='text-center mb-4'>Palindromes</h5>
        <div>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{initialNumber:'', finalNumber:''}}
            render={({ isValid }) => (
            <Form className="container d-flex flex-column align-items-center gap-3">
            <p>Enter two numbers and see all palindromic numbers between them</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >First Number</label>
                    <Field name="initialNumber" required-type="number" id='initialNumber' autoComplete='off' className='values p-2' />
                    <label>Last Number</label>
                    <Field name="finalNumber" required-type="number" id='finalNumber' autoComplete='off' className='values p-2' />
                </div>
                <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary mt-2 mb-4" type="submit">Submit</button>
                </div>
                <h4>Palindrome list</h4>
                <div>
                <p data-js="res" className="mb-5"></p>
                </div>
            </Form>
            )}
        />
        </div>
        </div>
        </>
    )
}

export default Palindrome;