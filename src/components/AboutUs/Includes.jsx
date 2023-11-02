import { Container } from "../../styles/Container";
import { includes } from "../../constants/data";
import { IncludesEl, IncludesLeft, IncludesList, IncludesText, IncludesWrapper, Video } from "../../styles/AboutUs/IncludesStyle";

const Includes = () => {
   return (
      <IncludesWrapper>
         <Container>
            <IncludesEl>
               <IncludesLeft>
                  <IncludesText>
                     <span>What Includes?</span>
                     <h2>The start of the journey</h2>
                     <p>ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. They developed the idea of creating a platform that would bring all these service providers together in one place, making it easier for consumers to find what they need and get their issues resolved quickly and easily. Without having to go to many different websites, each with their own booking system.</p>
                  </IncludesText>
                  <IncludesList>
                     <span>Our Methodology :</span>
                     <ul>
                        {includes.map(item => (
                           <li key={item.id}>
                              <span>{item.title}</span>
                              <span>{item.text}</span>
                           </li>
                        ))}
                     </ul>
                  </IncludesList>
               </IncludesLeft>
               <Video autoPlay muted loop controls src="./src/assets/video.mp4"/>
            </IncludesEl>
         </Container>
      </IncludesWrapper>
   )
};

export default Includes;