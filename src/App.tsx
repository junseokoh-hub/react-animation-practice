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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.5em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const boxVariants = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { scale: 1, borderRadius: "50%" },
    drag: {
      backgroundColor: "rgba(0, 206, 201,1.0)",
      transition: { duration: 10 },
    },
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box
          drag
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
          whileDrag={"drag"}
        />
      </Wrapper>
    </>
  );
}

export default App;
