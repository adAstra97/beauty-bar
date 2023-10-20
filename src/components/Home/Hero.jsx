import { BiSearch, BiMap } from 'react-icons/bi';
import { components } from "react-select";
import images from "../../constants/images";
import { cities, servicies } from "../../constants/data";

import {HeroWrapper, Container, HeroEl, HeroText, Subtitle, Title, Text, HeroForm, InputContainer, CustomSelect, Button} from "../../styles/Home/HeroStyle";

const SearchDropdownIndicator = props => {
   return (
      <components.DropdownIndicator {...props}>
         <BiSearch size={20} color="#141414"/>
      </components.DropdownIndicator>
   );
};

const MapDropdownIndicator = props => {
   return (
      <components.DropdownIndicator {...props}>
         <BiMap size={20} color="#141414"/>
      </components.DropdownIndicator>
   );
};



const Hero = () => {
   return (
      <HeroWrapper>
         <Container>
            <img src={images.hero} alt="Our work" />
            <HeroEl>
               <HeroText>
                  <Subtitle>
                     <img src={images.heroSub} alt="Hero Logo" />
                     <span>Hair Salon, Masseuse, Beauty Salon</span>
                  </Subtitle>
                  <Title>Find a service close to you</Title>
                  <Text>There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</Text>
               </HeroText>
               <HeroForm>
                  <InputContainer>
                     Service Name
                     <CustomSelect
                        options={servicies}
                        placeholder="Book your services"
                        isClearable
                        isSearchable={false}
                        components={{ DropdownIndicator: SearchDropdownIndicator }}

                     />
                  </InputContainer>
                  <InputContainer>
                     Address
                     <CustomSelect
                        options={cities}
                        placeholder="Choose your city"
                        isClearable
                        isSearchable={false}
                        components={{ DropdownIndicator: MapDropdownIndicator }}
                     />
                  </InputContainer>
                  <Button>
                     Search
                     <BiSearch size={40}/>
                  </Button>
               </HeroForm>
            </HeroEl>
         </Container>
      </HeroWrapper>
   )
};

export default Hero;