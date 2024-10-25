import { ReactNode } from "react";

interface InformationCard {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  onClick?: () => void;
}

const InformationCard = (props: InformationCard) => {
  return (
    <div
      onClick={props.onClick}
      className="grid gap-5 lg:max-w-lg lg:block cursor-pointer"
    >
      <div className="p-4 max-w-xl flex flex-col justify-between bg-white rounded-xl hover:shadow-lg group active:ring-2 active:ring-primary-600 border border-slate-200">
        <div className="lg:flex lg:items-center">
          <div className="flex flex-initial lg:mr-3 h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary-600">
            {props.icon}
          </div>
          <div>
            <div className="flex mt-6 lg:mt-0 text-lg font-bold leading-6 text-gray-900 lg:text-base">
              <div>{props.title}</div>
            </div>
            <p className="mt-3 line-clamp-2 lg:line-clamp-1 text-sm leading-6 text-gray-700 lg:mt-0 ">
              {props.subtitle}
            </p>
          </div>
        </div>

        <div className="relative mt-3 flex items-center lg:justify-end gap-x-4 lg:mt-2">
          <button className="text-primary-600 font-bold lg:text-sm lg:font-semibold group-hover:font-extrabold">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
