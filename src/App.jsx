import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";

import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
      <Theme>
        <GlobalStyle/>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Main>
        <Footer/>
      </Theme>
  )
}

export default App;
// font-family: 'DM Sans', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Manrope', sans-serif;
// font-family: 'Playfair Display', serif;
// font-family: 'Port Lligat Slab', serif;
// font-family: 'Roboto', sans-serif;