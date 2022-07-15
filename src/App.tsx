import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 500vh;
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
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(44, 31, 92), rgb(22, 118, 214))",
      "linear-gradient(135deg, rgb(19, 143, 81), rgb(79, 255, 60))",
    ],
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <>
      <GlobalStyle />
      <Wrapper style={{ background: gradient }}>
        <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default App;
