// React router dom
import { useNavigate } from "react-router-dom";

// Route imports
import { quintileReportingBlog, quintileSystemBlog } from "../App";

// Component imports
import InformationCard from "./InformationCard";

// HeroIcons
import { AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/outline";

const PageHero = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-16 relative lg:pt-8">
      <div className="px-4 sm:px-8 md:px-4 mx-auto w-full max-w-[1440px] lg:flex lg:px-0 lg:border-b lg:border-slate-300 pb-12">
        <div className="flex flex-col items-start w-full lg:max-w-[960px] lg:px-4">
          <span className="inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-600/10">
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
                <span className="text-gray-950 font-extrabold">Find</span>,{" "}
                <span className="text-gray-950 font-extrabold">filter</span> and{" "}
                <span className="text-gray-950 font-extrabold">export</span> the{" "}
                <span>data that you need</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16 lg:pt-0 flex lg:flex-none lg:grid lg:grid-rows-2 flex-col sm:flex-row gap-8 lg:gap-4 lg:pr-4">
          <InformationCard
            onClick={() => navigate(quintileSystemBlog)}
            icon={
              <HomeModernIcon
                aria-hidden="true"
                className="h-7 w-7 text-white"
              />
            }
            title={"South African school quintile levels explained"}
            subtitle={
              "Gain a clearer understanding of what school quintile levels are and how they are categorized."
            }
            buttonText={"Learn more ->"}
          />
          <InformationCard
            onClick={() => navigate(quintileReportingBlog)}
            icon={
              <AcademicCapIcon
                aria-hidden="true"
                className="h-7 w-7 text-white"
              />
            }
            title={"Quintile reporting requirements in higher education"}
            subtitle={
              "This article provides a general overview of key aspects of school quintile data reporting requirements in higher education."
            }
            buttonText={"Learn more ->"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
