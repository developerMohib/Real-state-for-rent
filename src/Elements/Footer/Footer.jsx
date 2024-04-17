import { FaFacebook,FaGithub,FaLinkedin  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/about' className="link link-hover" > About us </Link>
          <Link to='/contact' className="link link-hover" > Contact </Link>
          <Link to='/advantage' className="link link-hover" > Advantage </Link>
          <Link to='/login' className="link link-hover" > Log in </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
            <FaLinkedin />
            </a>
            <a>
            <FaGithub />
            </a>
            <a>
            <FaFacebook />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
