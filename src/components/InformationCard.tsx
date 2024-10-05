import { AcademicCapIcon, HomeModernIcon} from "@heroicons/react/24/outline";

const InformationCard = () => {
  return (
    <div>
      <div className="pt-16 px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="bg-gradient-to-r from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% shadow-sm flex rounded-xl p-4 max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
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
                This article outlines the the various DHET and CHE data requirements for reporting. Find out what data you need to be storing and reporting on.
              </p>
            </div>
            <div className="relative mt-3 flex items-center gap-x-4">
              <button className="text-primary-600 font-semibold">
                Learn more {`->`}
              </button>
            </div>
          </article>
          <article className="bg-gradient-to-r from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% shadow-sm rounded-lg p-4 flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
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
                Get a better understanding of a school quintile level is and how the different quintile levels are categorized. How quintile levels apply to public and private schools.
              </p>
            </div>
            <div className="relative mt-3 flex items-center gap-x-4">
              <button className="text-primary-600 font-semibold">
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
