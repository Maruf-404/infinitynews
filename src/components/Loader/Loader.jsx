/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import styled from "@emotion/styled";
import { Box, keyframes } from "@mui/material";
import { useMode } from "../../contexts/modeContext";

function Loader() {
  const { darkMode } = useMode();

  const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const LoaderStyles = styled(Box)(({ theme }) => ({
    width: "48px",
    height: "48px",
    border: "5px solid",
    borderColor: darkMode ? "#fff" : "#111",
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "inlineBlock",
    boxSizing: "border-box",
    animation: `${rotation} 1s linear infinite`,
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoaderStyles></LoaderStyles>
    </div>
  );
}

export default Loader;
