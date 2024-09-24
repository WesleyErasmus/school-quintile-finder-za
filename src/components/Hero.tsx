import InformationCard from "./InformationCard";

const PageHero = () => {
  return (
    <>
      <div className="container max-w-[1230px] flex justify-end">
        <header className="mt-10 mb-5 flex flex-wrap justify-between items-center w-full max-w-[976px]">
          {/* Hero Text & Logo */}
          <div className="flex items-center">
            <div>
              <img
                className="w-[8rem] h-[8rem]"
                src="../public/assets/nav-logo.png"
                alt="Nav Logo"
              />
            </div>
            <div className="flex-initial max-w-[445px]">
              <h1 className="lg:text-5xl text-3xl font-bold m-2">
                Quintile Finder SA
              </h1>
              <p className="text-base my-3 mx-3 text-gray-600">
                A tool to help you access South African schools quintile
                <span className="font-bold">
                  {" "}
                  data with ease.
                </span>
              </p>
            </div>
          </div>
          {/* Hero Cards */}
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
      </div>
    </>
  );
}

export default PageHero