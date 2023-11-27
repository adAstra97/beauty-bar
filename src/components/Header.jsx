import { useEffect, useState } from 'react';

import { NavLink, useLocation } from "react-router-dom";
import { FiChevronDown } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

import { Container } from "../styles/Container";
import images from "../constants/images";
import { Buttons, ButtonsPhone, HeaderEl, HeaderWrapper, Lang, LangPhone, Logo, LogoText, Menu, MenuSmall, NavEl, Navbar, NavbarSmall } from '../styles/HeaderStyle';


const Header = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   const {pathname} = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <HeaderWrapper>
         <Container>
            <HeaderEl>
               <Logo>
                  <img src={images.logo} alt="logo" />
                  <LogoText>STYLICLE</LogoText>
               </Logo>
               <Menu>
                  <NavEl>
                     <NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' }>Home</NavLink>
                     <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : '' }>About Us</NavLink>
                     <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : '' }>Contact Us</NavLink>
                  </NavEl>
                  <Lang>
                     EN
                     <FiChevronDown size={20} />
                  </Lang>
                  <Buttons>
                     <button>Login</button>
                     <button>Sign Up</button>
                  </Buttons>
               </Menu>
               <Navbar>
                  <RiMenu3Line fontSize={45} cursor={'pointer'} color={'#141414'} onClick={() => setToggleMenu(true)}/>
                  {toggleMenu && (
                  <NavbarSmall>
                     <GrClose fontSize={40} cursor={'pointer'} onClick={() => setToggleMenu(false)}/>
                     <MenuSmall>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' }>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : '' }>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : '' }>Contact Us</NavLink>
                     </MenuSmall>
                     <LangPhone>
                        <span className="active">En</span>
                        <span>Ru</span>
                     </LangPhone>
                     <ButtonsPhone>
                        <button>Login</button>
                        <button>Sign Up</button>
                     </ButtonsPhone>
                  </NavbarSmall>
                  )}
               </Navbar>
            </HeaderEl>
         </Container>
      </HeaderWrapper>
   )
};

export default Header;