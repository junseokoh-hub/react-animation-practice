import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 37em;
  height: 37em;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 12.5em;
  height: 12.5em;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.5em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const boxVariants = {
    hover: { rotateZ: 90 },
    click: { borderRadius: "50%" },
  };

  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin // make it to the center
            dragElastic={1} // default value: 0.5
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover={"hover"}
            whileTap={"click"}
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App;
