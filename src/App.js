

import styled, { css } from "styled-components";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price"


const Container = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color:#d07599;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: #55acee;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App = () => {
 
  return (
    <>
      <Container>
          <Navbar />
          <Intro />
          <IntoShape />
      </Container>
      <Container>
          <Feature />
          <FeatureShape />
      </Container>
      <Container>
          <Service />
          <ServiceShape />
      </Container>
      <Container>
          <Price />
          <PriceShape />
      </Container>
      <Container>
     
        <Footer />
      </Container>
    </>
  );
};

export default App;