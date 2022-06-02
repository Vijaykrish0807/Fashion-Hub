import React from 'react'
import Styled from 'styled-components'
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
`;
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
            1left
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
