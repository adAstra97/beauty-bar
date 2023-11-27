import { Route, Routes, useLocation } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";


const App = () => {

  const location = useLocation();

  return (
      <Theme>
        <GlobalStyle/>
        <Header/>
        <Main key={location.pathname}>
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