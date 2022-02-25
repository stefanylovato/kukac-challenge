import React from 'react';

const Cep = ({ cep, logradouro, bairro, localidade, uf }) => {

    return (
        <>
        <div class="card card-body">
        <p>{cep}</p>
        <p>{logradouro}</p>
        <p>{bairro}</p>
        <p>{localidade}</p>
        <p>{uf}</p>
        </div>
        </>
    )
}

export default Cep;