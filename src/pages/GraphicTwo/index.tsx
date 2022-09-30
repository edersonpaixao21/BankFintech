import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { SectionBackground } from '../../components/SectionBackground';
import mac from '../../assets/images/mac.png';
import * as Styled from './styles';

export const GraphicTwo = () => {
  return (
    <SectionBackground style={{ minHeight: '100vh' }}>
      <Styled.Wrapper>
        <Heading>Corumba Finance</Heading>
        <TextComponent>
          Excelente o atendimento, desde o primeiro contato até a efetivação da minha compra. Com certeza será minha referência para futuras cotações/aquisições.
        </TextComponent>
        <img src={mac} />
      </Styled.Wrapper>
    </SectionBackground>
  );
};
