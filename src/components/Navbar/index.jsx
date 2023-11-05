import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [search, setSearch] = useState(false);
    const [searchBtn, setSearchBtn] = useState(false);

    const handleSearch = () => {
        if (search) {

            setSearch(false)
        } else {
            setSearch(true)
        }
    }

    const handleBtnSearch = (e)=>{
        e.preventDefault()
       
    }

    const showSearchBar = search ? (<form className="d-flex  " role="search">
        <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-danger " type="submit" onClick={handleBtnSearch}>Search</button>
    </form>) : null


    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark heatb">
                <div className="container-fluid">
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/"><img src={logo} className='logo' alt="logo" /></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-danger" aria-current="page" to="/">Découverte</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Series TV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/" aria-disabled="true">Films</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/" aria-disabled="true">Programmes originaux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/" aria-disabled="true">Ajouts récents</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/" aria-disabled="true">Ma liste</Link>
                            </li>
                        </ul>
                        {showSearchBar}
                        <ul className='d-flex left'>
                            <li><i className="bi bi-search text-white" onClick={handleSearch}></i></li>
                            <li><Link to="/">Jeunesse</Link></li>
                            <li><i className="bi bi-bell-fill text-white " ></i></li>

                            <li className="nav-item dropdown">
                                <i className="bi bi-caret-down-fill  " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul className="dropdown-menu menul">
                                    <li><Link className="dropdown-item text-white " to="/inscription">Déconnexion</Link></li>
                                    <li><Link className="dropdown-item text-white " to="/">Connection</Link></li>

                                </ul>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
