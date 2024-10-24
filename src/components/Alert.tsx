import { ReactNode } from "react";

interface Alert {
  icon: ReactNode;
  message: string;
}
const Alert = (props: Alert) => {
  return (
    <div className="bg-blue-100 rounded-lg px-2 py-3 flex items-start flex-col text-sky-600 ring-1 ring-inset ring-blue-500/10">
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
