import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { SectionBackground } from '../../components/SectionBackground';
import card from '../../assets/images/credit-card.svg';
import * as Styled from './styles';
import Navbar from '../../components/Navbar/Navbar';

export const Home = () => {
  return (
    <SectionBackground>
      <>
        <Navbar />
        <Styled.Wrapper id="home">
          <Styled.TextContainer>
            <Heading>Escale Fintech Seguro e confiável</Heading>
            <TextComponent>
              Envie seus produtos fintech para seus clientes com rapidez e
              processos confiáveis. Seguro e altamente personalizável. Ascensão Financeira
              é o melhor parceiro para você se quiser escalar suas finanças
              produtos em todo o mundo.
            </TextComponent>
            <Styled.Button>
              <span>CONSULTA</span>
            </Styled.Button>
          </Styled.TextContainer>
          <Styled.ImageContainer>
            <img src={card} />
          </Styled.ImageContainer>
        </Styled.Wrapper>
        <Styled.LogoWrapper>
        </Styled.LogoWrapper>
      </>
    </SectionBackground>
  );
};
