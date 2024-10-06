import { ReactNode } from "react";

interface Alert {
  icon: ReactNode;
  message: string;
}
const Alert = (props: Alert) => {
  return (
    <div className="bg-sky-50 border border-1 border-sky-600/10 rounded-lg p-2 flex items-center flex-col text-sky-600">
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
