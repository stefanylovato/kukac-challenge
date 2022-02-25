import React from 'react';
import { Fragment } from "react";
import Card from "./Card";
import './style.scss';
import { Link } from 'react-router-dom';

function Cards() {
    const modulesList = [
        {
            id: 0,
            title: 'Palindrome',
            description: 'See how many palindromes numbers are in a numerical range'
        },
        {
            id: 1,
            title: 'Purchase',
            description: 'Calculate your change and see which money bills you gonna receive it'            
        },
        {
            id: 2,
            title: 'Cars',
            description: 'See and add some cars  to our garage'
        },
        {
            id: 3,
            title: 'Motorcycles',
            description: 'See and add some motorcycles to our garage',
        },
        {
            id: 4,
            title: 'Cep',
            description: 'Consult zip codes and see their respectives addresses',
        }
    ]

    return (
        <div id="modules" className="block">
        <Link to="*" />
            <div className="container">
                <div className="row">
                    <h2 className="display-6 mt-3 mb-3" style={{color: 'white'}}>Chose something to try!</h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center" >
                    {
                        modulesList.map(({id, title, description}) => {
                            return (
                                <Fragment key={id}>
                                    <Card 
                                    title={title}
                                    description={description}
                                    />
                                </Fragment>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Cards;