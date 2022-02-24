import { styled } from "@styles";

export const Wrapper = styled('button', {
  height: 50,
  width: 230,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$1",
  fontWeight: "bold",
  border: "none",
  background: "$text",
  cursor: "pointer",
  transition: "all .3s",
  '& > img': {
    marginRight: 8,
  },
  '&:hover': {
    filter: "brightness(0.8)"
  }
})