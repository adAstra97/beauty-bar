import styled from "styled-components";
import { keyframes } from 'styled-components'
import Select from "react-select";
import images from "../../constants/images";


export const HeroWrapper = styled.div`
   max-width: 1920px;
   margin: 0 auto;
`;

export const Container = styled.div`
   position: relative;

   & > img {
      position: absolute;
      right: 0%;

      @media (max-width: 1040px) {
         display: none;
      }
   }
`;

export const HeroEl = styled.div`
   padding: 256px 0;
   left: 0;
   position: absolute;
   background: linear-gradient(90deg, rgb(66, 42, 60) 55.75%, rgba(66, 42, 60, 0.85) 66.03%, rgba(66, 42, 60, 0.80) 75.96%, rgba(66, 42, 60, 0.31) 84.81%, rgba(66, 42, 60, 0.00) 99.7%);
   padding-left: 10%;

   @media (max-width: 1200px) {
      padding-left: 5%;
   }
   @media (max-width: 1100px) {
      padding: 145px 5%;
   }
   @media (max-width: 1040px) {
      background-image:
         linear-gradient(rgba(66, 42, 60, 0.85), rgba(66, 42, 60, 0.85)),
         url(${images.hero});
      background-size: cover;
      background-repeat: no-repeat;
	   background-attachment: fixed;
	   background-position: top;
   }

   @media (max-width: 500px) {
      padding: 70px 5%;
   }
`;
export const HeroText = styled.div``;

export const Subtitle = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   color: ${({theme}) => theme.colors.white};
   font-size: 1.5rem;
   font-weight: 600;
   line-height: 1.5;
   letter-spacing: 1.5px;
   text-transform: uppercase;
   font-family: 'Manrope', sans-serif;
   margin-bottom: 10px;
`;

export const Title = styled.h1`
   color: ${({theme}) => theme.colors.light};
   font-size: 7.0rem;
   font-weight: 700;
   line-height: 1.15;
   letter-spacing: -0.7px;
   font-family: 'Playfair Display', serif;
   margin-bottom: 25px;

   @media (max-width: 500px) {
      font-size: 5.0rem;
   }
`;

export const Text = styled.p`
   color: ${({theme}) => theme.colors.white};
   font-family: 'Manrope', sans-serif;
   font-size: 1.8rem;
   font-weight: 600;
   line-height: 1.7;
   margin-bottom: 50px;
`;

export const HeroForm = styled.form`
   border-radius: 61.333px;
   background: ${({theme}) => theme.colors.white};
   box-shadow: -1.33333px 0px 17.33333px 0px rgba(0, 0, 0, 0.10);
   display: flex;
   justify-content: space-between;
   gap: 25px;
   padding: 14px 14px 14px 40px;

   @media (max-width: 1100px) {
      flex-direction: column;
      padding: 30px 40px 30px 40px;
   }

   @media (max-width: 500px) {
      padding: 30px;
   }

   @media (max-width: 370px) {
      padding: 25px;
      border-radius: 25px;
   }
`;

export const InputContainer = styled.label`
   color: ${({theme}) => theme.colors.main};
   font-family: 'Inter', sans-serif;
   font-size: 1.8rem;
   font-weight: 700;
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

export const CustomSelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         fontSize: '1.4rem',
         border: 'none',
         boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.3) inset',
      }),
      option: (provided, state) => ({
         ...provided,
         cursor: 'pointer',
         backgroundColor: state.isDisabled
         ? undefined
         : state.isSelected
         ? '#ECBFD3'
         : state.isFocused
         ? '#fff0f6'
         : undefined,
         ':active': {
            ...provided[':active'],
            backgroundColor: !state.isDisabled
               ? state.isSelected
               ? '#ECBFD3'
               : '#ECBFD3'
               : undefined,
         },
         fontSize: '1.4rem',
      }),
      indicatorSeparator: () => null,
   }
})`
   min-width: 300px;
   font-family: 'Roboto', sans-serif;
   color: ${({theme}) => theme.colors.dark};

   @media (max-width: 420px) {
      min-width: 100%;
   }

`;

export const movingFlare = keyframes`
   0% {
      left: -30px;
      margin-left: 0px;
   }
   30% {
      left: 110%;
      margin-left: 80px;
   }
   100% {
      left: 110%;
      margin-left: 80px;
   }
`;

export const Button = styled.button.attrs({
   type: 'button',
})`
   padding: 14px 38px;
   border-radius: 56px;
   background: ${({theme}) => theme.colors.main};
   color: ${({theme}) => theme.colors.white};
   display: flex;
   align-items: center;
   gap: 23px;
   cursor: pointer;
   font-family: 'Manrope', sans-serif;
   font-size: 2.4rem;
   font-weight: 600;
   border: none;
   margin-left: 45px;
   box-shadow: 0 3px 3px ${({theme}) => theme.colors.gray};
   position: relative;
   overflow: hidden;
   transition: all 0.2s;

   @media (max-width: 1100px) {
      margin-left: 0;
      justify-content: center;
   }

   &:after {
      content: "";
      display: block;
      width: 20px;
      height: 220px;
      margin-left: 50px;
      background: ${({theme}) => theme.colors.white};
      background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.5) 100%
      );
      left: -40px;
      top: -100px;
      z-index: 1;
      transform: rotate(45deg);
      position: absolute;
      animation: ${movingFlare} 3.5s ease-in-out 0.05s infinite;
   }

   &:hover {
      box-shadow: 0 0px 0px ${({theme}) => theme.colors.gray};
      transform: translateY(1px);
   }
`;
