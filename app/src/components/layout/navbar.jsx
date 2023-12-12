import { Link } from "react-router-dom";
import Container from "./container";
import Styles from "./navbar.module.css";
import logo from '../../img/costs_logo.png'

function NavBar() {
  return (
    <nav className={Styles.navbar}>
      <Container>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Link to='/'>Home</Link >
          </li>
          <li className={Styles.item}>
            <Link to='/projects'>Projects</Link >
          </li>
          <li className={Styles.item}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className={Styles.item}>
            <Link to='company'>Company</Link >
          </li>
          <li className={Styles.item}>
            <Link to='/newproject'>New Project</Link >
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;