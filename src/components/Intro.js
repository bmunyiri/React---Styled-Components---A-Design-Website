import React from "react";
import styled from "styled-components";
import office from '../img/office.jpg'
import AnimatedShapes from "../AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;

  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  margin-bottom: 4rem;
  @media only screen and (max-width: 480px) {
   
  }

`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
     width: 100%;
       align-items: center;
  justify-content: space-between;
   margin-bottom: 3.5rem;
`;

const Phone = styled.span`
  color: #dc143c;
  font-weight: bold;
  padding-left:.25rem;
`;

const PhoneHeader = styled.span`
    font-weight: bold;
    text-align: center;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
margin-top:2rem;
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Your Website Professionally Made</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>REQUEST A QUOTE</Button>
          <Contact>
                      <PhoneHeader>Call Us </PhoneHeader>
                         <Phone> (+254) 717 - 326 - 484</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={office}/></Right>
    <AnimatedShapes />
    </Container>
  );
};

export default Intro;