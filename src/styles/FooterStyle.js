import styled from "styled-components";

export const FooterEl = styled.footer`
   flex: 0;
   background-color: #241520;
   padding-top: 65px;
`;

export const FooterWrapper = styled.div``;

export const FooterTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 52px;

   @media (max-width: 750px) {
      flex-direction: column;
      gap: 20px;
   }
`;

export const Buttons = styled.div`
   display: flex;
   gap: 10px;

   a {
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${({theme}) => theme.colors.secondary};
      background-color: transparent;
      transition: all 0.2s linear;
      box-sizing: border-box;

      &:hover {
         background-color: ${({theme}) => theme.colors.secondary};

         svg {
            path {
               fill: ${({theme}) => theme.colors.dark};
            }
         }
      }
   }
`;

export const FooterMain = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 20px;
   padding: 52px 0;

   @media (max-width: 750px) {
      flex-direction: column;
      align-items: center;
   }

   & > div:first-child {
      display: flex;
      justify-content: space-between;
      width: 45%;

      @media (max-width: 750px) {
         justify-content: center;
         width: 100%;
         gap: 110px;
      }

      @media (max-width: 380px) {
         justify-content: space-between;
         gap: 20px;
      }
   }

   h5 {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 20px;
   }

   a {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.7rem;
      font-weight: 500;
      line-height: 2;
      letter-spacing: -0.17px;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
         text-decoration: underline;
      }
   }

   span {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: -0.17px;
   }

   .contacts {
      max-width: 325px;

      li {

         span {
            width: 90px;
            display: inline-block;
         }

         a {
            width: 235px;
         }

         &:first-child {
            display: flex;
            align-items: baseline;
         }

         @media (max-width: 380px) {
            display: flex;
            flex-direction: column;
         }

      }
   }
`;

export const FooterBottom = styled.div`
   background-color: ${({theme}) => theme.colors.dark};
   padding: 20px 0;
   text-align: center;
   color: ${({theme}) => theme.colors.white};
   font-family: 'Manrope', sans-serif;
   font-size: 1.8rem;
   line-height: 2;
   letter-spacing: -0.18px;
`;