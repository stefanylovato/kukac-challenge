import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export const Motorcycle = () => {
    const [motoList, setMotoList] = useState([]);

    const clearTable = () => {
        const moto = document.querySelector('[data-js="moto"]')
        if (!!moto.innerHTML) {
            moto.innerHTML = 
            `
            <thead>
                 <tr>
                    <th scope="col"></th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Wheels</th>
                    <th scope="col">Passengers</th>
                </tr>
            </thead>
            `;
        }
    };

    const getMotoList = async ()  => {
        try {
            const { data } = await axios.get("http://localhost:8080/motorcycle");
            setMotoList(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async ({ model, year, brand, passenger }) => {
        try{
            const { data } = await axios.post("http://localhost:8080/motorcycle", {
                model: model,
                year: year,
                brand: brand,
                passenger: passenger,
            });
            setMotoList(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="container background-container mt-5" >
        <h5 className='text-center mb-4'>Motorcycles</h5>
        <div>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{model:'', year:'', brand:'', passenger:''}}
            render={({ isValid }) => (
            <Form className="container d-flex flex-column align-items-center gap-3">
            <p>something something</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >Model:</label>
                    <Field name="model" required-type="text" id='model' autoComplete='off' className='values p-2' />
                    <label>Year:</label>
                    <Field name="year" required-type="number" id='year' autoComplete='off' className='values p-2' />
                    <label>Brand:</label>
                    <Field name="brand" required-type="text" id='brand' autoComplete='off' className='values p-2' />
                    <label>Passengers:</label>
                    <Field name="passenger" required-type="number" id='passenger' autoComplete='off' className='values p-2' />
                </div>
                <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary mt-2 mb-4" type="submit" >Submit</button>
                <button type="reset" onClick={clearTable} class="btn btn-outline-primary mt-2 mb-4">Reset</button>
                </div>
                <h4>Registered motorcycles:</h4>
                <div>
                <table data-js="moto" class="table table table-striped align-items-center justify-content-center mb-4">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Wheels</th>
                        <th scope="col">Passengers</th>
                     </tr>
                </thead>
                {motoList.map((moto, idx) => {
                    return (
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                                <td>{moto.model}</td>
                                <td>{moto.year}</td>
                                <td>{moto.brand}</td>
                                <td>{moto.wheels}</td>
                                <td>{moto.passenger}</td>
                        </tr>
                    </tbody>
                    );
                })}
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

export default Motorcycle;