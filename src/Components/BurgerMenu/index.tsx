import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import "./styles.css";

interface BurgerMenuProps {
    pageWrapId: string;
    outerContainerId: string;
}

const BurgerMenu = ({ pageWrapId, outerContainerId }: BurgerMenuProps) => {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/menu" className="menu-item">Cardápio</Link>
        <Link to="/ourhistory" className="menu-item">Nosso café</Link>
        <Link to="/stores" className="menu-item">Lojas</Link>
        <Link to="/franchise" className="menu-item">Seja um franqueado</Link>
        {/* <Link to="/" className="menu-item">Aprenda mais</Link> */}
      </Menu>
    );
  };

export default BurgerMenu;