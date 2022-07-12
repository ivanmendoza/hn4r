/**
 * @module Icon
 */

import './icon.css';
import './icons.css';

type IconProps = {
  className?: string;
  name: string;
  size?: '12' | '16' | '24' | '32' | '48' | '64' | '72' | '96' | '128';
};

/**
 * Icon library
 * @kind component
 * @prop {string} - className
 * @prop {string} - name
 * @prop {'12' | '16' | '24' | '32' | '48' | '64' | '72' | '96' | '128'} - size
 * @returns {React.FC}
 */
const Icon: React.FC<IconProps> = ({ className, name, size }) => {
  const iconSize = size ? size : '24';
  return <div className={`hn-icon hn-icon-${name} hn-icon-size-${iconSize} ${className ? className : ''}`} />;
};

export default Icon;
