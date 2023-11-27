import styled from "styled-components";

const ErrorMessageStyle = styled.p`
   color: ${({theme}) => theme.colors.main};
   font-family: 'Manrope', sans-serif;
   font-size: 1.6rem;
   font-weight: 400;
   line-height: 1.2;
`;

const ErrorMessage = ({message}) => {
   return (
      <ErrorMessageStyle>{message}</ErrorMessageStyle>
   )
};

export default ErrorMessage;