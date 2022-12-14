import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, Content, ClosedSideBar, OpenSideBar } from './styles';
import { House } from '@styled-icons/bootstrap/House';
import { Cash } from '@styled-icons/bootstrap/Cash';
import { CreditCard } from '@styled-icons/bootstrap/CreditCard';
import { Wallet2 } from '@styled-icons/bootstrap/Wallet2';
import {
  MdSettings,
  BsArrowRight,
  BsArrowLeft,
  RiLogoutCircleRLine,
} from 'react-icons/all';

import logoImg from '../../assets/images/E-Finance.svg';
import { Link } from 'react-router-dom';
// import userImg from '../../assets/images/E-Finance.svg';

export function SidebarDashboard() {
  const [sideBar, setSideBar] = useState(false);

  const { logout } = useContext(AuthContext);

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar}>
                <BsArrowRight />
              </button>

              <img src={logoImg} alt="Eu" />

              {/* Links principais do app */}
              <ul>
                <Link to="" title="Dashboard">
                  <House />
                </Link>
                <Link to="" title="Transaction">
                  <Wallet2 />
                </Link>
                <Link to="" title="Payment">
                  <Cash />
                </Link>
                <Link to="" title="Card">
                  <CreditCard />
                </Link>
              </ul>
            </nav>
            <div>
              {/* Icones que pode não ser tão principais no app */}
              <ul>
                {/* <a href="/" title="Notificações">
                  <IoNotificationsSharp />
                </a> */}
                <Link to="" title="Configuration">
                  <MdSettings />
                </Link>
                <a onClick={() => logout()} title="Logout">
                  <RiLogoutCircleRLine />
                </a>
              </ul>
            </div>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <BsArrowLeft />
                  </button>
                </span>
                <div>
                  <img src={logoImg} alt="User" />
                  <h1>E-Finance</h1>
                </div>

                {/* Icones principais do app */}
                <ul>
                  <Link to="" title="Dashboard">
                    <House />
                    <p>Painel</p>
                  </Link>
                  <Link to="" title="Transaction">
                    <Wallet2 />
                    <p>Transação</p>
                  </Link>
                  <Link to="" title="Payment">
                    <Cash />
                    <p>Pagamento</p>
                  </Link>
                  <Link to="" title="Card">
                    <CreditCard />
                    <p>Cartão</p>
                  </Link>
                </ul>
              </nav>
              <div>
                {/* Icones que pode não ser tão principais no app */}
                <ul>
                  {/* <a href="/">
                    <IoNotificationsSharp />
                    <p>Notificações</p>
                  </a> */}
                  <Link to="">
                    <MdSettings />
                    <p>Configuração</p>
                  </Link>
                  <a onClick={() => logout()}>
                    <RiLogoutCircleRLine />
                    <p> Sair </p>
                  </a>
                </ul>

                <span>
                  <p>Ederson Paixão</p>
                </span>
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
