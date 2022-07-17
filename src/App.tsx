import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 26.5em;
  height: 26.5em;
  border-radius: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 6.2em;
  height: 6.2em;
  background-color: rgb(0, 165, 255);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <>
      <GlobalStyle />
      <Wrapper onClick={toggleClicked}>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: "50%" }} />
          ) : null}
        </Box>
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
