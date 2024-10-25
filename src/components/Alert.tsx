import { ReactNode } from "react";

interface Alert {
  icon: ReactNode;
  message: string;
}
const Alert = (props: Alert) => {
  return (
    <div className="bg-sky-200 bg-opacity-70 rounded-lg px-3 py-3 flex items-start flex-col text-blue-700 ring-1 ring-inset ring-sky-700/10">
      <div className="flex items-start">
        <div className="mr-2">{props.icon}</div>
        <div>
          <p className="text-sm leading-6 tracking-wide">{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
