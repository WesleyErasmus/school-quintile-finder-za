import { ReactNode } from "react";

interface InformationCard {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
}

const InformationCard = (props: InformationCard) => {
  return (
    <div>
      <div className="px-4">
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="bg-gradient-to-r from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% shadow-sm flex rounded-lg p-4 max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                {props.icon}
              </div>
              <h3 className="flex mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <div>
                  <span className="absolute inset-0" />
                  {props.title}
                </div>
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {props.subtitle}
              </p>
            </div>
            <div className="relative mt-3 flex items-center gap-x-4">
              <button className="text-primary-600 font-semibold">
               {props.buttonText}
              </button>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
