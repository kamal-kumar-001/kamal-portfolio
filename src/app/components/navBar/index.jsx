"use client"
import { useState } from "react";
import Link from "next/link";
import {  FaBars } from 'react-icons/fa'
// import logo from '/images/logo.png'
import { HiX } from 'react-icons/hi'
import {navMenus} from "../../../../public/utils";
import './styles.scss';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }


    return (
        <div className="nav">
            <nav className="navbar">
                <div className="navbar__container">
                    <Link href={'/'} className="navbar__container__logo">
                        <img src={'/images/logo.png'} alt="logo" />
                    </Link>
                    <ul onClick={handleClick} className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
                        {navMenus.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link href={item.to}   className="navbar__container__menu__item__links ">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {
                            click ? <HiX size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;