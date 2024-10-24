import { ClipLoader } from "react-spinners";

interface LoaderProps {
  color: string;
  size: number;
}

const SpinnerLoader = (props: LoaderProps) => {
  return <ClipLoader size={props.size} color={props.color} />;
};

export default SpinnerLoader;
