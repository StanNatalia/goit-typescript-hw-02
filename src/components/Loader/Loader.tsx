import { Audio } from "react-loader-spinner";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius={9}
          color="green"
          ariaLabel="three-dots-loading"
        />
      )}
    </div>
  );
};
export default Loader;
