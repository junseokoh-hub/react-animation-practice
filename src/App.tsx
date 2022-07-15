import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2.5em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 4.5em;
  width: 4.5em;
  border-radius: 50%;
  place-self: center;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const boxVariants = {
    start: { opacity: 0, scale: 0.5 },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: { opacity: 0, y: 10 },
    end: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
