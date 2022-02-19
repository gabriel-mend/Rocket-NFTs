import { styled } from "@stitches/react";

export const Wrapper = styled('h1', {
  fontSize: '$5',
  color: '$text',
  
  '& > span': {
    color: "$logo",
  }
})