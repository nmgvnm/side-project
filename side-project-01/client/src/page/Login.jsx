import React from "react";
import { styled } from "styled-components";
import img1 from "../assets/후라이5.png"
import img2 from "../assets/후라이6.png"

const Login = () => {
  return (
    <Container>
      <BackCard>
        <BottonSection>
          <div><img src={img1} alt="후라이5.png" style={{width : "300px"}}/></div>
          <div>loginbutton</div>
        </BottonSection>
        <BottonSection>
          <div><img src={img2} alt="후라이5.png" style={{width : "160px"}}/></div>
          <div>singupbutton</div>
        </BottonSection>
      </BackCard>
    </Container>
  );
};

export default Login;

const BackCard = styled.div`
  width: 1000px;
  height: 60vh;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottonSection = styled.div`
  background-color: lightblue;
  width : 400px;
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content : center;
`;

const Container = styled.div`
  background-color: #ceb8ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
