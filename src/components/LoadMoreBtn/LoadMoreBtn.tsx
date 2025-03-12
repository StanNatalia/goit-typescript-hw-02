import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  handleChangePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ handleChangePage }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={handleChangePage}>Load More</button>
    </div>
  );
};
export default LoadMoreBtn;
