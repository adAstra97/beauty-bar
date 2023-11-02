import styled from "styled-components";

export const ValuesEl = styled.div`
   background-color: ${({theme}) => theme.colors.white};
   padding: 8vh 0;
   text-align: center;

   & > span {
      color: ${({theme}) => theme.colors.main};
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.55;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 10px;
   }

   h2 {
      margin-bottom: 10px;
      padding: 0 10px;
   }
`;

export const Value = styled.li`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 30px;
   max-width: 620px;
   margin: 0 auto;
   padding: 35px 10px;

   @media (max-width: 410px) {
      flex-direction: column;
   }

   div {
      text-align: left;
   }

   img {
      width: 90px;
      height: 90px;
   }

   span {
      display: inline-block;
      color: ${({theme}) => theme.colors.dark};
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.2;
      font-family: 'Playfair Display', serif;
      margin-bottom: 8px;
   }

   p {
      color: #555;
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.75;
   }

   &:not(:last-child) {
      border-bottom: 1px solid #D3D3D3;
   }

`;