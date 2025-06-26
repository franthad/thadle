import { Outlet, Link } from "react-router-dom";
//import '../index.css';
import '../NavbarTest.css';

const Layout = () => {
  return (
    <>
    <div class="topnav">
      <nav>
            <Link to="/">Home</Link>
            <Link to="/privacy">Privacy</Link>
          <div class="topnav-right">
            <Link to="/contact">Contact</Link>
          </div>
      </nav>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;