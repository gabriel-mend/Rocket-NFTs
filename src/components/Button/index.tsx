import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode
  icon: React.ImgHTMLAttributes
}

export function Logo({ children }: ButtonProps) {
  return(
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}