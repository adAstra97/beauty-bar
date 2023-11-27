import { Container } from "../styles/Container";
import images from "../constants/images";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { Buttons, FooterBottom, FooterEl, FooterMain, FooterTop, FooterWrapper } from "../styles/FooterStyle";

const Footer = () => {
   return (
      <FooterEl>
         <Container>
            <FooterWrapper>
               <FooterTop>
                  <img src={images.logoFooter} alt="Logo Footer" />
                  <Buttons>
                     <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
                        <FaFacebookF size={19} color="#FFF"/>
                     </a>
                     <a href="https://twitter.com/?lang=ru" target="_blank">
                        <FaTwitter size={19} color="#FFF"/>
                     </a>
                     <a href="https://ru.linkedin.com/" target="_blank">
                        <FaLinkedinIn size={19} color="#FFF"/>
                     </a>
                     <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
                        <FaInstagram size={19} color="#FFF"/>
                     </a>
                  </Buttons>
               </FooterTop>
               <FooterMain>
                  <div>
                     <div>
                        <h5>Explore</h5>
                        <ul>
                           <li>
                              <a href="">Home</a>
                           </li>
                           <li>
                              <a href="">About Us</a>
                           </li>
                           <li>
                              <a href="">Services</a>
                           </li>
                           <li>
                              <a href="">Blog</a>
                           </li>
                           <li>
                              <a href="">Contact Us</a>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h5>Utility Pages</h5>
                        <ul>
                           <li>
                              <a href="">Privacy Policy</a>
                           </li>
                           <li>
                              <a href="">Terms of Use</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div>
                     <h5>Keep in Touch</h5>
                     <ul className="contacts">
                        <li>
                           <span>Address:</span>
                           <a href="https://maps.app.goo.gl/qut1TvTv8M9DVoQn9" target="_blank">Mariendalsvej 50D 2 2000 Frederiksberg</a>
                        </li>
                        <li>
                           <span>Mail:</span>
                           <a href="mailto:support@servicemarket.com" target="_blank">support@servicemarket.com</a>
                        </li>
                        <li>
                           <span>Phone:</span>
                           <a href="tel:+221234567900" target="_blank">(+22) 123 - 4567 - 900</a>
                        </li>
                     </ul>
                  </div>
               </FooterMain>
            </FooterWrapper>
         </Container>
         <FooterBottom>
            <span>
               Copyright 2023, ServiceMarket.dk | All rights reserved.
            </span>
         </FooterBottom>
      </FooterEl>
   )
}

export default Footer;