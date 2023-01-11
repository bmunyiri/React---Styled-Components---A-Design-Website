import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 50px
  }
`;


const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Circle1 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e60023;
`;

const Circle2 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff9;
`;

const Circle3 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0d5500;
`;

const MiniCard = () => {
  return (
    <>
    <Container>
      <Circle1 />
      <Text>Red</Text>
      </Container>
        <Container>
         <Circle2 />
      <Text>Yellow</Text>
      </Container>
      <Container>
           <Circle3 />
          <Text>Green</Text>
    </Container>
    </>
  );
};

export default MiniCard;