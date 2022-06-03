import React from 'react'
import Styled from 'styled-components'
//import Search from "@materail-ui/icons";
//import SearchIcon from '@material-ui/icons/Search';
//import styled from '@emotion/styled';
const Container= Styled.div`
    height: 60px;
`;
const Wrapper = Styled.div`
    padding:10px 10px;
    display:flex;
    justify-content: space-between;
    `;
const Left=Styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Language=Styled.span`
font-size:14px;
cursor:pointer;
display:flex;
`;
/*const SearchContainer=Styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
`;*/
const Center=Styled.div`
    flex:1;

`;
const Right=Styled.div`
    flex:1;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
      
      <Left>
            <Language>EN</Language>
           
      </Left>
      <Center>
            Center
      </Center>
      <Right>
            Right
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
