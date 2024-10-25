import { ReactNode } from "react";

interface Alert {
  icon: ReactNode;
  message: string;
}
const Alert = (props: Alert) => {
  return (
    <div className="bg-sky-200 rounded-lg px-2 py-3 flex items-start flex-col text-sky-700 ring-1 ring-inset ring-blue-700/20">
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
