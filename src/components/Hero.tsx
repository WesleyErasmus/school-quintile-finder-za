import InformationCard from "./InformationCard";

const PageHero = () => {
  return (
    <div>
      <div className="px-4 pt-44 max-w-[1230px] flex justify-end">
        <header className="mb-5 flex flex-wrap justify-between items-center w-full max-w-[960px]">
          <span className="inline-flex items-center rounded-lg bg-secondary-50 px-2 py-1 text-xs font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">
            Simplify your quintile search
          </span>
          <div className="mt-8 flex items-center">
            <div className="flex-initial max-w-[445px]">
              <h1 className="font-extrabold text-4xl tracking-tight text-gray-900">
                Discover{" "}
                <span className="text-secondary-600">
                  South African school quintile data
                </span>{" "}
                with ease.
              </h1>
              <p className="mt-4 text-lg leading-6 text-gray-600">
                Your go-to South African School Quintile Finder.{" "}
                <span className="text-secondary-600 font-extrabold">Find</span>,{" "}
                <span className="text-secondary-600 font-extrabold">filter</span>{" "}
                and{" "}
                <span className="text-secondary-600 font-extrabold">export</span>{" "}
                the <span>data that you need</span>.
              </p>
            </div>
          </div>
        </header>
      </div>
      <InformationCard />
    </div>
  );
}

export default PageHero