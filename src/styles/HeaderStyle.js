import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
   padding: 25px 0;
   background-color: ${({theme}) => theme.colors.white};
`;

export const HeaderEl = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Logo = styled(Link).attrs({
   to: '/',
})`
   display: flex;
   align-items: center;
   gap: 10px;
   text-decoration: none;
`;

export const LogoText = styled.span`
   font-size: 3.5rem;
   letter-spacing: 1.9px;
   font-family: 'Port Lligat Slab', serif;
   font-weight: 400;
   line-height: 1.2;
   color: ${({theme}) => theme.colors.main};
`;

export const Menu = styled.div`
   display: flex;
   gap: 35px;

   @media (max-width: 899px) {
      display: none;
   }
`;

export const NavEl = styled.nav`
   display: flex;
   align-items: center;
   gap: 46px;

   a {
      color: ${({theme}) => theme.colors.dark};
      text-decoration: none;
      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      line-height: 1.5;
      font-size: 1.6rem;
      position: relative;
      transition: color 0.3s;

      &::after {
         content: "";
         position: absolute;
         left: 0;
         bottom: -2px;
         width: 100%;
         height: 2px;
         background-color: ${({theme}) => theme.colors.main};
         transform: scaleX(0);
         transition: transform 0.3s ease-in-out;
      }

      &:hover {
         color: ${({theme}) => theme.colors.main};

         &::after {
            transform: scaleX(1);
         }
      }

      &.active {
         color: ${({theme}) => theme.colors.main};

         &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: ${({theme}) => theme.colors.main};
            transform: scaleX(1);
            transition: transform 0.3s ease-in-out;
         }
      }
   }
`;

export const Lang = styled.span`
   display: flex;
   align-items: center;
   font-size: 1.6rem;
   font-family: 'Manrope', sans-serif;
   font-weight: 700;
   cursor: pointer;
   gap: 5px;
`;

export const Buttons = styled.div`
   display: flex;
   gap: 20px;

   button {
      padding: 12px 24px;
      border: 1.5px solid ${({theme}) => theme.colors.dark};
      border-radius: 5px;
      font-family: 'Manrope', sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.5;
      cursor: pointer;
      transition: all 0.3s;

      &:first-child {
         background-color: transparent;
         color: ${({theme}) => theme.colors.dark};

         &:hover {
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.main};
            border: 1.5px solid ${({theme}) => theme.colors.main};
         }
      }

      &:last-child {
         background-color: ${({theme}) => theme.colors.dark};
         color: ${({theme}) => theme.colors.white};

         &:hover {
            background-color: ${({theme}) => theme.colors.main};
            border: 1.5px solid ${({theme}) => theme.colors.main};
         }
      }
   }
`;

export const Navbar = styled.div`
   display: none;

   @media (max-width: 899px) {
      display: flex;
   }
`;

export const NavbarSmall = styled.div`
   display: flex;
   position: fixed;
   z-index: 555;
   top: 0;
   right: 0;
   bottom: 0;
   flex-direction: column;
   align-items: center;
   width: 220px;
   background-color: ${({theme}) => theme.colors.white};
   border: 2px solid ${({theme}) => theme.colors.main};
   border-right: 0px;
   border-top-left-radius: 16px;
   border-bottom-left-radius: 16px;
   box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
   padding: 25px 15px;

   svg {
      align-self: flex-end;
   }
`;

export const MenuSmall = styled(NavEl)`
   display: flex;
   flex: 1;
   flex-direction: column;
   padding-top: 40px;
`;

export const LangPhone = styled.div`
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-family: 'Manrope', sans-serif;
   font-weight: 600;
   line-height: 1.5;
   font-size: 1.6rem;

   span {
      padding: 5px 10px;

      &.active {
         border: 3px solid ${({theme}) => theme.colors.main};
         border-radius: 10px;
      }
   }
`;

export const ButtonsPhone = styled(Buttons)`
   flex-direction: column;
`;
