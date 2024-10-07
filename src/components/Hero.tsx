import { AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import InformationCard from "./InformationCard";

const PageHero = () => {
  return (
    // <div className="py-16 relative border-b border-slate-100">
    // <div className="mt-[74px] py-16 relative">
    <div className="py-16 relative">
      {/* Custom bg */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* End background */}

      {/* Hero inner container */}
      <div className="mx-auto max-w-[1230px] w-full">
        <div className="px-4 flex justify-end">
          <header className=" flex flex-wrap justify-between items-center w-full max-w-[960px]">
            <span className="inline-flex items-center rounded-lg bg-primary-50 px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10 ">
              Simplify Your Quintile Search
            </span>
            <div className="mt-8 flex items-center">
              <div className="flex-initial max-w-[445px]">
                <h1 className="font-extrabold text-4xl tracking-tight text-gray-900">
                  <span className="text-primary-600">Discover </span> South
                  African school quintile
                  <span className="text-primary-600"> data with ease.</span>
                </h1>
                <p className="mt-8 text-lg leading-6 text-gray-700">
                  Your go-to South African School quintile finder.{" "}
                  <span className="text-primary-600 font-extrabold">Find</span>,{" "}
                  <span className="text-primary-600 font-extrabold">
                    filter
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-600 font-extrabold">
                    export
                  </span>{" "}
                  the <span>data that you need</span>.
                </p>
              </div>
            </div>
          </header>
        </div>
        <div className="pt-16 flex flex-col gap-8">
          <InformationCard
            icon={
              <AcademicCapIcon
                aria-hidden="true"
                className="h-7 w-7 text-white"
              />
            }
            title={"Quintile reporting requirements in higher education"}
            subtitle={
              "This article outlines the the various DHET and CHE data requirements for reporting. Find out what data you need to be storing and reporting on."
            }
            buttonText={"Learn more ->"}
          />
          <InformationCard
            icon={
              <HomeModernIcon
                aria-hidden="true"
                className="h-7 w-7 text-white"
              />
            }
            title={"South African school quintile levels explained"}
            subtitle={
              "Get a better understanding of a school quintile level is and how the different quintile levels are categorized. How quintile levels apply to public and private schools."
            }
            buttonText={"Learn more ->"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
