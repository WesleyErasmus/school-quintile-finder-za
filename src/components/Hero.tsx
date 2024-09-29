import InformationCard from "./InformationCard";

const PageHero = () => {
  return (
    <div className="container bg-slate-200">
      <div className="p-4 flex items-center">
        <img
          className="w-[3.5rem] h-[3.5rem]"
          src="https://i.postimg.cc/ht5Xp48X/header-logo.png"
          alt="Logo"
        />
        <div className="ml-2">
          <h1 className="text-xl font-bold sm:font-bold tracking-tight text-gray-800 sm:text-3xl">
            School Quintile Finder
          </h1>
          <p className="text-gray-600 leading-4 font-medium">South Africa</p>
        </div>
      </div>
      <div className="p-4 mt-10 max-w-[1230px] flex justify-end">
        <header className="mb-5 flex flex-wrap justify-between items-center w-full max-w-[960px]">
          {/* Hero Text & Logo */}
          <div className="flex items-center">
            <div className="flex-initial max-w-[445px]">
              <p className="mt-6 font-extrabold text-4xl tracking-tight text-gray-900">
                A tool to help you access South African school quintile data
                <span className=""> with ease.</span>
              </p>
            </div>
          </div>
          {/* Hero Cards */}
          <div className="mt-10 flex flex-wrap flex-row md:flex-col gap-4">
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
          </div>
        </header>
      </div>

      {/* <div className="container max-w-[1230px] flex justify-end">
        <header className="mt-10 mb-5 flex flex-wrap justify-between items-center w-full max-w-[976px]">
          <div className="flex items-center">
            <div className="flex-initial max-w-[445px]">
              <h1 className="lg:text-5xl text-3xl font-bold m-2">
                Quintile Finder SA
              </h1>
              <p className="text-base my-3 mx-3 text-gray-600">
                A tool to help you access South African schools quintile
                <span className="font-bold"> data with ease.</span>
              </p>
            </div>
            <div>
              <img
                className="w-[8rem] h-[8rem]"
                src="../public/assets/nav-logo.png"
                alt="Nav Logo"
              />
            </div>
          </div>
          <div className="flex sm:flex-row md:flex-col gap-y-2">
            <InformationCard
              cardImage={"../public/assets/what-is-image.png"}
              title={"What is a school quintile"}
              subtitle={"Lorem ipsum dolor sit amet dolor sit amet."}
            />
            <InformationCard
              cardImage={"../public/assets/gov-logo-sm.png"}
              title={"Quintile data required by gov"}
              subtitle={"Lorem ipsum, dolor sit amet consectetur."}
            />
          </div>
        </header>
      </div> */}
    </div>
  );
}

export default PageHero