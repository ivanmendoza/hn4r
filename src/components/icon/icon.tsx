import './icon.css';
import './icons.css';

type IconProps = {
  name: string;
  size?: '12' | '16' | '24' | '32' | '48' | '64' | '72' | '96' | '128';
};

const Icon: React.FC<IconProps> = ({ name, size }) => {
  const iconSize = size ? size : '24';
  return <div className={`hn-icon hn-icon-${name} hn-icon-size-${iconSize}`} />;
};

export default Icon;
