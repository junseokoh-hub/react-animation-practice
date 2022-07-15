import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 12.5em;
  height: 12.5em;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.5em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <button onClick={() => x.set(200)}>CLICK ME!</button>
        <Box style={{ x }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default App;
