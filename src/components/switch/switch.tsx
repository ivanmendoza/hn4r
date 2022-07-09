import { Link, useLocation } from 'react-router-dom';

import './switch.css';

type SwitchOption = { label: string; href: string; selected?: boolean };
type SwitchProps = { className?: string; options: Array<SwitchOption> };

const Switch: React.FC<SwitchProps> = ({ className, options }) => {
  const location = useLocation();
  return (
    <div className={`hn-switch ${className ? className : ''}`}>
      {options &&
        options.map(({ label, href }: SwitchOption, index) => {
          return (
            <Link
              key={`option-${index}`}
              className={`hn-switch-option ${location.pathname === href ? 'active' : ''}`}
              to={href}
            >
              {label}
            </Link>
          );
        })}
    </div>
  );
};

export default Switch;
