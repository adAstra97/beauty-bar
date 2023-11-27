import { Container } from "../../styles/Container";
import images from "../../constants/images";
import { contacts } from "../../constants/data";
import { GetInTouchEl, GetInTouchList, GetInTouchRight, GetInTouchWrapper } from "../../styles/Contacts/GetInTouchStyle";

const GetInTouch = () => {
   return (
      <GetInTouchWrapper>
         <Container>
            <GetInTouchEl>
               <img src={images.getInTouch} alt="contacts" />
               <GetInTouchRight>
                  <span>Get in Touch!</span>
                  <h2>We are here to help you always...</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to many desktop publishing packages.</p>
                  <GetInTouchList>
                     {contacts.map(item => (
                        <li key={item.id}>
                           <img src={item.img} alt={item.title} />
                           <div>
                              <span>{item.title}</span>
                              <a href={item.link} target="_blank">{item.text}</a>
                           </div>
                        </li>
                     ))}
                  </GetInTouchList>
               </GetInTouchRight>
            </GetInTouchEl>
         </Container>
      </GetInTouchWrapper>
   )
};

export default GetInTouch;