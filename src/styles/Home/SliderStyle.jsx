import styled from 'styled-components';

export const SliderWrapper = styled.div`
   padding: 80px 0 50px;
`;

export const Slide = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 24px;
   user-select: none;
`;

export const Text = styled.span`
   color: ${({theme}) => theme.colors.primary};
   font-size: 1.8rem;
   font-weight: 700;
   font-family: 'Manrope', sans-serif;
`;