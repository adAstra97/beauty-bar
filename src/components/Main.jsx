import React from 'react'
import styled from 'styled-components'

const MainEl = styled.main`
   flex: 1;
`;

const Main = ({children}) => {
   return (
      <MainEl>{children}</MainEl>
   )
}

export default Main