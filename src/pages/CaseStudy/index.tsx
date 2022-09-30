import { TextComponent } from '../../components/TextComponent';
import { Button } from '../Home/styles';
import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import phone from '../../assets/images/phone.png';
import * as Styled from './styles';

export const CaseStudy = () => {
  return (
    <SectionContainer style={{ minHeight: '100vh' }}>
      <>
        <Styled.Wrapper>
          <Heading>Estudo de caso</Heading>
          <Styled.Title>Alguns resultados de nossos clientes</Styled.Title>
          <Styled.InfoWrapper>
            <Styled.InfoLeft>
              <Styled.InfoLeftTitle>Corumba Finance</Styled.InfoLeftTitle>
              <TextComponent>
                Gostaria de parabenizar a empresa pela agilidade, competência e comprometimento com os interesses dos clientes. Gostei muito do resultado final. Um abraço.
              </TextComponent>
              <Button>
                <span>SAIBA MAIS SOBRE ESTE CLIENTE</span>
              </Button>
            </Styled.InfoLeft>
            <img src={phone} />
            <Styled.InfoRight>
              <Styled.InfoRightOne>
                <span>Adquiriu 8 clientes de longa data</span>
              </Styled.InfoRightOne>
              <Styled.InfoRightOne>
                <span>300% de crescimento no primeiro ano</span>
              </Styled.InfoRightOne>
              <Styled.InfoRightOne>
                <span>Contratado 24 desenvolvedores talentososs</span>
              </Styled.InfoRightOne>
            </Styled.InfoRight>
          </Styled.InfoWrapper>
        </Styled.Wrapper>
      </>
    </SectionContainer>
  );
};
