type PaginationProps = {
  className?: string;
  current?: number;
  total: number;
  onChange?: Function;
};
const Pagination: React.FC<PaginationProps> = ({ className, current, total }) => (
  <div className={`hn-pagination ${className}`}>{`<- Pagination here: ${current} of ${total} ->`}</div>
);

export default Pagination;
