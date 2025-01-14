import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='top' className="navbar">
            <div className="container">
                <div className="logo">
                    <div className='mintlogo'>
                        <Image src="/logomint.png" alt="me" width="64" height="64" />
                    </div>
                    <h1>Nature<span>Token</span></h1>
                </div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <li>Home</li>
                </Link>
                <Link activeClass="active" to="generate" spy={true} smooth={true} duration={500} >
                    <li>Mint</li>
                </Link>
                <Link activeClass="active" to="info" spy={true} smooth={true} duration={1000} >
                    <li>Setup</li>
                </Link>
                    <li><a href="mailto:waine.andrew@protonmail.com?subject=Regarding thinMint">Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
