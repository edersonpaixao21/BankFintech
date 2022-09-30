import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import grapich from '../../assets/images/grapich.png';
import * as Styled from './styles';
import { SectionContainer } from '../../components/SectionContainer';

export const Graphic = () => {
  return (
    <SectionContainer style={{ minHeight: '100vh' }}>
      <Styled.Wrapper>
        <Heading>Consultoria para Startups em Fintech</Heading>
        <TextComponent>
          Nossa equipe é composta por especialistas comprovados em finanças, tecnologia e ciência.
          Esse mix possibilita que nossa equipe entregue os melhores resultados para
          todos os nossos clientes.
        </TextComponent>
        <img src={grapich} />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
