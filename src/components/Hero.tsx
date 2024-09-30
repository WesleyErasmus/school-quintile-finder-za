import InformationCard from "./InformationCard";

const PageHero = () => {
  return (
    <div className="container">
      <div className="">
        <div className="p-4 flex items-center">
          <img
            className="w-[125px] h-auto"
            src="../../public/assets/logo-1-t_1.png"
            alt="Logo"
          />
        </div>
        <div className="p-4 pt-16 max-w-[1230px] flex justify-end">
          <header className="mb-5 flex flex-wrap justify-between items-center w-full max-w-[960px]">
            {/* Hero Text & Logo */}

            {/* Badge */}
            <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
              Simplifying your quintile search
            </span>
            <div className="mt-8 flex items-center">
              <div className="flex-initial max-w-[445px]">
                <h1 className="font-extrabold text-4xl tracking-tight text-gray-900">
                  Discover{" "}
                  <span className="text-indigo-600">
                    South African school quintile data
                  </span>{" "}
                  with ease.
                </h1>
                <p className="mt-8 text-lg leading-6 text-gray-600">
                  Your go-to South African School Quintile Finder.{" "}
                  <span className="text-indigo-600 font-extrabold">Find</span>,{" "}
                  <span className="text-indigo-600 font-extrabold">filter</span>{" "}
                  and{" "}
                  <span className="text-indigo-600 font-extrabold">export</span>{" "}
                  the <span>data that you need</span>.
                </p>
              </div>
            </div>
            {/* Hero Cards */}
            {/* <div className="mt-10 flex flex-wrap flex-row md:flex-col gap-4">
            <InformationCard
              cardImage={"https://i.postimg.cc/GtHNPQb8/hero-card-image-1.png"}
              title={"What is a school quintile"}
              subtitle={"Lorem ipsum dolor sit amet dolor sit amet."}
            />
            <InformationCard
              cardImage={"https://i.postimg.cc/DzpRSHTk/hero-card-image-2.png"}
              title={"Quintile data required by gov"}
              subtitle={"Lorem ipsum, dolor sit amet consectetur."}
            />
          </div> */}
            <InformationCard />
          </header>
        </div>
      </div>
    </div>
  );
}

export default PageHero