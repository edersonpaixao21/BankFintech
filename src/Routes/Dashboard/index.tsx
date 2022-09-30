import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';
import Button from 'react-bootstrap/Button';
import cartao from '../../assets/images/cartao.svg';
import { SidebarDashboard } from '../../components/SidebarDashboard';
import { DiReact } from 'react-icons/all';
import person1 from '../../assets/images/person1.jfif';
import person2 from '../../assets/images/person2.jfif';
import person3 from '../../assets/images/person3.jfif';
import person4 from '../../assets/images/person4.jfif';

export const Dashboard = () => {
  return (
    <Styled.Background>
      <SidebarDashboard />
      <SectionContainer>
        <Styled.Wrapper>
          <Heading>Painel</Heading>

          <Styled.SectionFinance>
            <Styled.FinanceWrapper>
              <Styled.FinanceOne>
              <Styled.FinanceName>Equilíbrio</Styled.FinanceName>
                <Styled.FinanceInfo>R$: 2,000</Styled.FinanceInfo>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceName>Renda</Styled.FinanceName>
                <Styled.FinanceInfo>R$: 520</Styled.FinanceInfo>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceName>Despesas</Styled.FinanceName>
                <Styled.FinanceInfo>R$: 9,000</Styled.FinanceInfo>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceName>Poupança</Styled.FinanceName>
                <Styled.FinanceInfo>R$: 5000</Styled.FinanceInfo>
              </Styled.FinanceOne>
            </Styled.FinanceWrapper>
            <Styled.CardWrapper>
              <Styled.TitleWrapper>
                <Heading>Meu cartão</Heading>
                <Button size="lg" className="ms-5">
                  Adicionar cartão
                </Button>
              </Styled.TitleWrapper>
              <Styled.ImgBackground>
                <img className="mt-3" src={cartao} />
              </Styled.ImgBackground>
            </Styled.CardWrapper>
          </Styled.SectionFinance>
          <Styled.SectionTransaction>
            <Styled.TransactionWrapper className="table-responsive">
              <Heading>Histórico de Transações</Heading>
              <Styled.NamesWrapper className="mb-0 table ">
                <Styled.TransactionThead>
                  <Styled.TransactionTr>
                    <Styled.TransactionTh>Nome</Styled.TransactionTh>
                    <Styled.TransactionTh>Modelo</Styled.TransactionTh>
                    <Styled.TransactionTh>Data</Styled.TransactionTh>
                    <Styled.TransactionTh>Quantia</Styled.TransactionTh>
                  </Styled.TransactionTr>
                </Styled.TransactionThead>
                <Styled.TransactionTbody>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>Lucas Santos</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Comida</Styled.TransactionTd>
                    <Styled.TransactionTd>Jun, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>João Marques</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Comida</Styled.TransactionTd>
                    <Styled.TransactionTd>Ago, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>Priscila Vasquez</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Aluguel</Styled.TransactionTd>
                    <Styled.TransactionTd>Set, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                </Styled.TransactionTbody>
              </Styled.NamesWrapper>
            </Styled.TransactionWrapper>
            <Styled.QuickTransaction>
              <Styled.TitleWrapper>
                <Heading>Transação Rápida</Heading>
              </Styled.TitleWrapper>
              <Styled.WrapperPersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person1} />
                  <p>Juliana Silva</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person2} />
                  <p>Lucas Oliveira</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person3} />
                  <p>Carolina Santos</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person4} />
                  <p>Antonio Alves</p>
                </Styled.PersonQuickTransaction>
              </Styled.WrapperPersonQuickTransaction>
              <Styled.InputWrapper>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Valor R$"
                />
                <Button>Pagar</Button>
              </Styled.InputWrapper>
            </Styled.QuickTransaction>
          </Styled.SectionTransaction>
        </Styled.Wrapper>
      </SectionContainer>
    </Styled.Background>
  );
};
