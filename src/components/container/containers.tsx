import './containers.css';

type ContainersProps = {
  children: any;
  className?: string;
};

type SpacerProps = ContainersProps & {
  type?: 'toolbar' | 'filters';
};

const ContainerModel = (id: string, { className: classStyleName, children, type }: any) => {
  const typeClassName = type ? ` hn-${id}-${type}` : '';
  return <div className={`hn-${id}${typeClassName} ${classStyleName ? classStyleName : ''}`}>{children}</div>;
};

const Container: React.FC<ContainersProps> = (props) => ContainerModel('container', props);
const Spacer: React.FC<SpacerProps> = (props) => ContainerModel('spacer', props);

export { Container, Spacer };
