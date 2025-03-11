import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={handleChangePage}>Load More</button>
    </div>
  );
};
export default LoadMoreBtn;
