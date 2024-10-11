// Component imports
import InformationCard from "./InformationCard";

// HeroIcons
import { AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/outline";

const PageHero = () => {
  return (
    <div className="pt-16 pb-12 relative lg:pb-10 lg:pt-8 lg:border-b lg:border-slate-200">
      <div className="px-4 sm:px-8 mx-auto w-full max-w-[1230px] lg:flex lg:px-0">
        <div className="flex flex-col items-start w-full lg:max-w-[960px] lg:px-4">
          <span className="inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
            Simplify Your Quintile Search
          </span>
          <div className="mt-8 flex">
            <div className="flex-initial sm:max-w-xl">
              <h1 className="font-extrabold text-4xl tracking-tight text-gray-900">
                <span className="text-primary-600">Discover </span> South
                African school quintile
                <span className="text-primary-600"> data with ease.</span>
              </h1>
              <p className="mt-8 text-lg leading-6 text-gray-700">
                Your go-to South African School quintile finder.{" "}
                <span className="text-primary-600 font-extrabold">Find</span>,{" "}
                <span className="text-primary-600 font-extrabold">filter</span>{" "}
                and{" "}
                <span className="text-primary-600 font-extrabold">export</span>{" "}
                the <span>data that you need</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16 lg:pt-0 flex lg:flex-none lg:grid lg:grid-rows-2 flex-col sm:flex-row gap-8 lg:gap-4 lg:pr-4">
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
        </div>
      </div>
    </div>
  );
};

export default PageHero;
