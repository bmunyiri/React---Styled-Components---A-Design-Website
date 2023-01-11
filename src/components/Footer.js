import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 15%;
  background-color: #fff59e;
  color: black;
  
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
    color:#fff;
  
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  color:black;
  }
`;



const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem><a href="https://linkedin.com/in/bernard-njiru-munyiri">Linkedin</a></ListItem>
          <ListItem><a href="https://github.com/bmunyiri">Github</a></ListItem>
          <ListItem><a href="https://web.facebook.com/kenyawebpro">Facebook</a></ListItem>
          <ListItem><a href="mailto:bernard.munyiri@gmail.com">Email</a></ListItem>
        </List>
        <Copyright>Kenya Web Professionals Ⓒ</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;