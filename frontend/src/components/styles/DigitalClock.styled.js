import styled from "styled-components";

export const DigitalClockStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

  @font-face {
    font-family: "digital-clock";
    src: url("digital-7.ttf");
  }

  p {
    font-family: 'digital-clock', 'Orbitron', sans-serif;
  }
`;

export const DisplayClock = styled.p`
  font-size: 8vw;
`;