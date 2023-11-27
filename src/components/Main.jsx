import React from 'react';
import styled from 'styled-components';
import { PageLoader } from '../styles/Container';
import { ThreeDots } from 'react-loader-spinner';

const MainEl = styled.main`
   flex: 1;
   opacity: 0;
   animation: fadeIn 1s forwards;
   animation-delay: 1s;
`;

const Main = ({children}) => {
   return (
      <>
         <MainEl>{children}</MainEl>
         <PageLoader>
            <ThreeDots
               color='#BA7894'
            />
         </PageLoader>
      </>
   )
}

export default Main