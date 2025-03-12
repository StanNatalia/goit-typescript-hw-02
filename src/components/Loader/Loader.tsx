import { Audio } from "react-loader-spinner";

interface LoaderProps {
  isLoading: boolean;
  height?: string;
  width?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  height = "80",
  width = "80",
  color = "red,",
}) => {
  return (
    <div>
      {isLoading && (
        <Audio
          height={height}
          width={width}
          color={color}
          ariaLabel="three-dots-loading"
        />
      )}
    </div>
  );
};
export default Loader;
