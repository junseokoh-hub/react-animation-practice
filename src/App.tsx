import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 26.5em;
  height: 12.5em;
  border-radius: 2.5em;
  position: absolute;
  top: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: { x: 500, opacity: 0, scale: 0 },
  visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: { duration: 1 },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
            i === visible ? (
              <Box
                variants={box}
                initial="invisible"
                animate="visible"
                exit="exit"
                key={i}
              >
                {i}
              </Box>
            ) : null,
          )}
        </AnimatePresence>
        <button onClick={nextPlease}>Next</button>
      </Wrapper>
    </>
  );
}

export default App;
