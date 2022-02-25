import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export const Car = () => {
    const [carList, setCarList] = useState([]);

    const clearTable = () => {
        const car = document.querySelector('[data-js="car"]')
        if (!!car.innerHTML) {
            car.innerHTML = 
            `
            <thead>
                 <tr>
                    <th scope="col"></th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Doors</th>
                    <th scope="col">Brand</th>
                </tr>
            </thead>
            `;
        }
    };


    const getCarList = async ()  => {
        try {
            const { data } = await axios.get("http://localhost:8080/car");
            setCarList(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async ({ model, year, doors, brand }) => {
        try{
            const { data } = await axios.post("http://localhost:8080/car", {
                model: model,
                year: year,
                doors: doors,
                brand: brand
            });
            setCarList(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
          <div className="container background-container mt-5" >
        <h5 className='text-center mb-4'>Cars</h5>
        <div>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{model:'', year:'', doors:'', brand:''}}
            render={({ isValid }) => (
            <Form className="container d-flex flex-column align-items-center gap-3">
            <p>something something</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label >Model:</label>
                    <Field name="model" required-type="text" id='model' autoComplete='off' className='values p-2' />
                    <label>Year:</label>
                    <Field name="year" required-type="number" id='year' autoComplete='off' className='values p-2' />
                    <label>Doors:</label>
                    <Field name="doors" required-type="number" id='doors' autoComplete='off' className='values p-2' />
                    <label>Brand:</label>
                    <Field name="brand" required-type="text" id='brand' autoComplete='off' className='values p-2' />
                </div>
                <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary mt-2 mb-4" type="submit" >Submit</button>
                <button type="reset" onClick={clearTable} class="btn btn-outline-primary mt-2 mb-4">Reset</button>
                </div>
                <h4>Registered cars:</h4>
                <div>
                <table data-js="car" class="table table table-striped align-items-center justify-content-center mb-4">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Doors</th>
                        <th scope="col">Brand</th>
                     </tr>
                </thead>
                {carList.map((car, idx) => {
                    return (
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.doors}</td>
                                <td>{car.brand}</td>
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

export default Car;