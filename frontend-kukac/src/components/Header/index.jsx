/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../assets/kukac-icon.svg'
import './style.scss';

const Header = () => {

    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-center me-3"></img>Kukac Challenge</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>

    )

}

export default Header;