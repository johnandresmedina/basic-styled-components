import styled from "styled-components";

const Link = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: #61dafb;
`;

export default Link;
