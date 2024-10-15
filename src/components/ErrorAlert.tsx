import { ReactNode } from "react";

interface ErrorAlert {
  icon: ReactNode;
  message: string;
}
const ErrorAlert = (props: ErrorAlert) => {
  return (
    <div className="bg-white rounded-lg font-medium py-4 px-2 flex items-start flex-col text-red-600 ring-1 ring-inset ring-red-600">
      <div className="flex items-start">
        <div className="mr-2">{props.icon}</div>
        <div>
          <p className="text-sm leading-6 tracking-wide">{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
