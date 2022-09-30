import { TextComponent } from '../../components/TextComponent';
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackground';

import { Analytics } from '@styled-icons/material-outlined';
import { TrendingUp } from '@styled-icons/material-outlined/TrendingUp';
import { Payments } from '@styled-icons/material-outlined/Payments';
import * as Styled from './styles';

export const Process = () => {
  return (
    <SectionBackground style={{ minHeight: '100vh' }}>
      <>
        <Styled.Wrapper>
          <Heading>Entregando valor em cada etapa da produção</Heading>
          <Styled.Title>O processo</Styled.Title>
          <TextComponent>
            Frases estratégicas que percorremos com cada cliente tornam isso possível
            para implementar processos altamente eficientes, mesmo em startups de ritmo acelerado
            que gostam de escalar o mais rápido possível.

          </TextComponent>
        </Styled.Wrapper>
        <Styled.ProcessWrapper>
          <Styled.ProcessOne>
            <Analytics />
            Análise
          </Styled.ProcessOne>
          <Styled.ProcessOne>
            <TrendingUp /> Crescimento
          </Styled.ProcessOne>
          <Styled.ProcessOne>
            <Payments />
            <span>Lucro</span>
          </Styled.ProcessOne>
        </Styled.ProcessWrapper>
      </>
    </SectionBackground>
  );
};
