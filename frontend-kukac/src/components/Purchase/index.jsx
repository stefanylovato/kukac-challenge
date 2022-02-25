import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export const Purchase = () => {
    const handleSubmit = async ({productValue, payment}) => {
        const total = document.querySelector('[data-js="total"]')
    try {
        const { data } = await axios.post("http://localhost:8080/purchase", {
            productValue,
            payment
        });
        total.innerHTML = `
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Change</th>
                            <th scope="col">100 bills</th>
                            <th scope="col">10 bills</th>
                            <th scope="col">1 bills</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                                <td>${data.change}</td>
                                <td>${data.bills100}</td>
                                <td>${data.bills10}</td>
                                <td>${data.bills1}</td>
                        </tr>
                        </tbody>
                    `
            }catch(error) {
            console.log(error)
            }
        }


    return (
        <>
        <div className="container background-container mt-5" >
        <h5 className='text-center mb-4'>Purchase</h5>
        <div>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{productValue:'', payment:''}}
            render={({ isValid }) => (
            <Form className="container d-flex flex-column align-items-center gap-3">
            <p>Enter a value for a product and a value for his payment. The system will show you the change and how many money bills (100, 10 and 1) you gonna receive. </p>
                <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >Product value</label>
                    <Field name="productValue" required-type="number" id='productValue' autoComplete='off' className='values p-2' />
                    <label>Payment value</label>
                    <Field name="payment" required-type="number" id='payment' autoComplete='off' className='values p-2' />
                </div>
                <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary mt-2 mb-4" type="submit">Submit</button>
                </div>
                <h4>Change and bills:</h4>
                <div>
                <table data-js="total" class="table table table-striped">

                </table>
                </div>
            </Form>
            )}
        />
        </div>
        </div>
        </>
    )

}

export default Purchase;