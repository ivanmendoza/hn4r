type ContainersProps = {
  children: any;
  className?: string;
};

/**
 * Main function to build containers with custom css class. Works as foundation for components like `Container` and `Spacer`
 * @ignore
 * @param {string} id
 * @param {ContainersProps | SpacerProps} { className: classStyleName, children, type }
 * @return {HTMLDivElement}
 */
const ContainerModel = (id: string, { className: classStyleName, children, type }: any) => {
  const typeClassName = type ? ` hn-${id}-${type}` : '';
  return <div className={`hn-${id}${typeClassName} ${classStyleName ? classStyleName : ''}`}>{children}</div>;
};

export { ContainerModel };
export type { ContainersProps };
