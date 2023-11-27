import styled from "styled-components";

export const GetInTouchWrapper = styled.div`
   background-color: ${({theme}) => theme.colors.white};
`;

export const GetInTouchEl = styled.div`
   display: flex;
   align-items: center;
   max-width: 1200px;
   padding: 100px 0;
   margin: 0 auto;
   gap: 50px;

   @media (max-width: 1155px) {
      flex-direction: column-reverse;
      text-align: center;
   }

   img {
      @media (max-width: 1155px) {
         max-width: 75%;
      }
   }
`;

export const GetInTouchRight = styled.div`

   & > span {
      color: ${({theme}) => theme.colors.primary};
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.55;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      display: inline-block;
      margin-bottom: 10px;
   }

   h2 {
      margin-bottom: 25px;
   }

   p {
      color: ${({theme}) => theme.colors.dark};
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.75;
   }
`;

export const GetInTouchList = styled.ul`
   margin-top: 45px;
   display: flex;
   flex-direction: column;
   gap: 30px;

   @media (max-width: 1155px) {
      max-width: 475px;
      margin: 45px auto;
   }

   span {
      color: ${({theme}) => theme.colors.dark};
      font-family: 'Playfair Display', serif;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 1.25;
   }

   a {
      color: ${({theme}) => theme.colors.dark};
      font-family: 'Manrope', sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: 0.96px;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s linear;

      &:hover {
         border-bottom: 1.5px solid ${({theme}) => theme.colors.primary};
      }
   }

   li {
      display: flex;
      gap: 25px;
      align-items: center;

      @media (max-width: 520px) {
         flex-direction: column;
      }

      div {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         gap: 10px;

         @media (max-width: 520px) {
            align-items: center;
         }
      }
   }
`;