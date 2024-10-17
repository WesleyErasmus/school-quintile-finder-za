import { ClipLoader } from "react-spinners";

interface LoaderProps {
  color: string;
  size: number;
}

const Loader = (props: LoaderProps) => {
  return <ClipLoader size={props.size} color={props.color} />;
};

export default Loader;
