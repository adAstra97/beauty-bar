import styled from "styled-components";
import { Container } from "../styles/Container";
import images from "../constants/images";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const FooterEl = styled.footer`
   flex: 0;
   background-color: #241520;
   padding-top: 65px;
`;

const FooterWrapper = styled.div``;

const FooterTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 52px;

   @media (max-width: 750px) {
      flex-direction: column;
      gap: 20px;
   }
`;

const Buttons = styled.div`
   display: flex;
   gap: 10px;

   a {
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${({theme}) => theme.colors.secondary};
      background-color: transparent;
      transition: all 0.2s linear;
      box-sizing: border-box;

      &:hover {
         background-color: ${({theme}) => theme.colors.secondary};

         svg {
            path {
               fill: ${({theme}) => theme.colors.dark};
            }
         }
      }
   }
`;

const FooterMain = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 20px;
   padding: 52px 0;

   @media (max-width: 750px) {
      flex-direction: column;
      align-items: center;
   }

   & > div:first-child {
      display: flex;
      justify-content: space-between;
      width: 45%;

      @media (max-width: 750px) {
         justify-content: center;
         width: 100%;
         gap: 110px;
      }

      @media (max-width: 380px) {
         justify-content: space-between;
         gap: 20px;
      }
   }

   h5 {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 20px;
   }

   a {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.7rem;
      font-weight: 500;
      line-height: 2;
      letter-spacing: -0.17px;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
         text-decoration: underline;
      }
   }

   span {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: -0.17px;
   }

   .contacts {
      max-width: 325px;

      li {

         span {
            width: 90px;
            display: inline-block;
         }

         a {
            width: 235px;
         }

         &:first-child {
            display: flex;
            align-items: baseline;
         }

         @media (max-width: 380px) {
            display: flex;
            flex-direction: column;
         }

      }
   }
`;

const FooterBottom = styled.div`
   background-color: ${({theme}) => theme.colors.dark};
   padding: 20px 0;
   text-align: center;
   color: ${({theme}) => theme.colors.white};
   font-family: 'Manrope', sans-serif;
   font-size: 1.8rem;
   line-height: 2;
   letter-spacing: -0.18px;
`;



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
                           <a href="https://maps.app.goo.gl/qut1TvTv8M9DVoQn9">Mariendalsvej 50D 2 2000 Frederiksberg</a>
                        </li>
                        <li>
                           <span>Mail:</span>
                           <a href="mailto:support@servicemarket.com">support@servicemarket.com</a>
                        </li>
                        <li>
                           <span>Phone:</span>
                           <a href="tel:+221234567900">(+22) 123 - 4567 - 900</a>
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