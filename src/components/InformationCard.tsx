import { AcademicCapIcon, HomeModernIcon} from "@heroicons/react/24/outline";

const InformationCard = () => {
  return (
    <div>
      <div className="bg-white pt-16 px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="bg-gradient-to-r from-indigo-50 from-10% via-indigo-50 via-50% to-indigo-100 to-90% shadow-sm flex rounded-xl p-4 max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <AcademicCapIcon
                  aria-hidden="true"
                  className="h-7 w-7 text-white"
                />
              </div>
              <h3 className="flex mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <div>
                  <span className="absolute inset-0" />
                  What does the government require institutions to report on
                </div>
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
                provident unde eligendi ipsum consectetur voluptas requieste
                skotte mpatchi cupiditate, nobis tempora facere.
              </p>
            </div>
            <div className="relative mt-3 flex items-center gap-x-4">
              <button className="text-indigo-600 font-semibold">
                Learn more {`->`}
              </button>
            </div>
          </article>
          <article className="bg-gradient-to-r from-indigo-50 from-10% via-indigo-50 via-50% to-indigo-100 to-90% shadow-sm rounded-lg p-4 flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <HomeModernIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <div>
                  <span className="absolute inset-0" />
                  What are South African school quintiles
                </div>
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
                provident unde eligendi ipsum consectetur voluptas cupiditate,
                nobis tempora facere.
              </p>
            </div>
            <div className="relative mt-3 flex items-center gap-x-4">
              <button className="text-indigo-600 font-semibold">
                Learn more {`->`}
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
