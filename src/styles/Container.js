import styled from "styled-components";

export const Container = styled.div`
   max-width: 1710px;
   padding: 0 15px;
   margin: 0 auto;
`;

export const ModalLoader = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(0, 0, 0, 0.3);
   z-index: 900;
`;

export const PageLoader = styled.div`
   display: block;
   position: fixed;
   inset: 0;
   margin: auto;
   width: 80px;
   height: 80px;
   animation: fadeOut 1s 1s;
   animation-fill-mode: forwards;
`;