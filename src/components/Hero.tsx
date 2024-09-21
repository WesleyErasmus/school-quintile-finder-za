const PageHero = () => {
  return (
    <>
      <header className="mt-20 mb-10 mx-auto flex flex-wrap justify-between items-end max-w-[1040px] p-4 rounded-xl border border-1 border-gray-200">
        {/* Hero Text & Logo */}
        <div className="flex-initial max-w-[545px]">
          <h1 className="text-6xl font-semibold m-2">Quintile Finder SA</h1>
          <p className="text-base my-3 mx-5 text-gray-600">
            A tool to help you access South African schools quintile data with
            ease.
          </p>
        </div>
        {/* Hero Cards */}
        <div className="">
          <article className="flex items-center justify-start py-4 px-3 mb-4 rounded-xl bg-white shadow-lg">
            <div>
              <img
                src="../public/assets/nav-logo.png"
                className="w-8 mr-4"
                alt="Card icon"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold">What is a school quintile</h4>
              <p className="text-[10px] text-gray-800">
                Lorem ipsum dolor sit amet dolor sit amet.
              </p>
            </div>
          </article>
          <article className="flex items-center justify-start py-4 px-3 mb-4 rounded-xl bg-white shadow-lg">
            <div>
              <img
                src="../public/assets/nav-logo.png"
                className="w-8 mr-4"
                alt="Card icon"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold">
                Quintile data required by gov
              </h4>
              <p className="text-[10px] text-gray-800">
                Lorem ipsum, dolor sit amet consectetur.
              </p>
            </div>
          </article>
        </div>
      </header>
    </>
  );
}

export default PageHero