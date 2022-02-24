import { styled } from "@styles";

export const Wrapper = styled('header', {
  width: "100%",
  paddingTop: 55,
  
  position: 'fixed',
  top: '0',
  left: '0',

  '& > div': {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "bottom",
  }
})

export const LinksContainer = styled('div', {
  display: "flex",
  alignItems: "flex-end",
  '& > a': {
    color: "$text",
    fontSize: "$2"
  },
  '& > a + a': {
    marginLeft: 50
  }
})