import { ThemeProvider } from "styled-components";

const lightTheme = {
   colors: {
      main: '#BA7894',
      dark: '#141414',
      primary: '#422A3C',
      white: '#FFFFFF',
      gray: '#555555',
      secondary: '#ECBFD3',
      light: '#F7E5C1',
   }
}

export const Theme = ({children}) => {
   return (
      <ThemeProvider theme={lightTheme}>
         {children}
      </ThemeProvider>
   )
}