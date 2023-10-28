import styled from "styled-components";
import images from "../../constants/images";

export const RecommendedWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   padding: 8vh 0;
`;

export const RecommendedEl = styled.div`
   text-align: center;

   span:first-child {
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.main};
   }

   h2 {
      margin-bottom: 16px;
   }

   p {
      font-family: 'Manrope', sans-serif;
      font-size: 2.0rem;
      font-weight: 400;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 70px;
   }

   .swiper-button-next, .swiper-button-prev {
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

      &::after {
         font-size: 1.4rem;
         font-weight: 900;
      }
   }

`;

export const Slide = styled.div`
   border: 1px solid #D5D5D5;
   border-radius: 26px;

   img {
      max-width: 100%;
      width: 100%;
      border-top-right-radius: 26px;
      border-top-left-radius: 26px;
   }
`;

export const TextInfo = styled.div`
   padding: 24px;
   display: grid;
   grid-template-rows: 32px 80px 53px;
   gap: 24px;
`;

export const TopText = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   div {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.main};
      font-family: 'Open Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
   }

   span {
      color: ${({ theme }) => theme.colors.dark};
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.77;
   }
`;

export const Info = styled.div`
   text-align: left;

   h4 {
      color: ${({ theme }) => theme.colors.dark};
      font-family: 'Playfair Display', serif;
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 10px;
   }

   span {
      color: ${({ theme }) => theme.colors.dark};
      font-family: 'Inter', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      position: relative;
      padding-left: 28px;
      display: grid;

      &::before {
         content: '';
         display: block;
         width: 18px;
         height: 18px;
         background: url(${images.map});
         position: absolute;
      }
   }
`;

export const Button = styled.button`
   cursor: pointer;
   border: 1px solid ${({ theme }) => theme.colors.main};
   border-radius: 8px;
   padding: 16px 32px;
   color: ${({ theme }) => theme.colors.main};
   font-family: 'Playfair Display', serif;
   font-size: 1.6rem;
   font-weight: 700;
   background-color: transparent;
   transition: 0.2s linear;

   &:hover {
      background-color: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.white};
   }
`;