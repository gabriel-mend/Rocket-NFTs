import { Logo } from "components/Logo";
import Link from "next/link";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <Logo />
      <S.LinksContainer>
        <Link href="">
          <a>Comprar NFT</a>
        </Link>
        <Link href="">
          <a>Sobre</a>
        </Link>
        <Link href="">
          <a>FAQ</a>
        </Link>
      </S.LinksContainer>
      
    </S.Wrapper>
  );
}
