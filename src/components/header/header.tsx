/**
 * @module Header
 */

import { Container } from '../container';
import './header.css';

type HeaderProps = {
  logo?: string;
  logo_alt?: string;
  className?: string;
};

/**
 * Header component with custom brand support
 * @kind component
 * @prop {string} - logo url
 * @prop {string} - logo alternative text
 * @prop {string} - className
 * @returns {React.FC}
 */
const Header: React.FC<HeaderProps> = ({ className, logo, logo_alt }) => (
  <div className={`hn-header ${className || ''}`}>
    <Container className="hn-header-content">
      {logo && <img className="hn-header-logo" src={logo} alt={logo_alt} />}
    </Container>
  </div>
);

export default Header;
