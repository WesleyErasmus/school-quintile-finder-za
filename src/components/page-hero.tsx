const PageHero = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-12">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
                A tool to help you find South African school quintile
                information
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-tight font-pj">
                South African School Quintile Finder
              </h1>
              <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
                Use the search bar and filtering options to find the school
                quintile data that you are looking for.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageHero;
