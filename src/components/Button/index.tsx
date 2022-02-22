import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Button({ children, icon }: ButtonProps) {
  return(
    <S.Wrapper>
      {icon}
      {children}
    </S.Wrapper>
  )
}