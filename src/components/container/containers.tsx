import './containers.css';

type ContainersProps = {
  children: any;
  className?: string;
};

const ContainerModel = (id: string, { className: classStyleName, children }: any) => {
  return <div className={`hn-${id} ${classStyleName ? classStyleName : ''}`}>{children}</div>;
};

const Container: React.FC<ContainersProps> = (props) => ContainerModel('container', props);
const Spacer: React.FC<ContainersProps> = (props) => ContainerModel('spacer', props);

export { Container, Spacer };
