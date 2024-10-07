const TopNavbar = () => {
  return (
    <>
      <div className="z-40 py-5 px-4 fixed top-0 w-full flex items-center bg-gradient-to-t from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% border-b border-slate-100">
        <div className="mx-auto max-w-[1230px] w-full">
          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center bg-white w-8 h-8 rounded-full shadow-md">
              <img
                className="w-5 h-5"
                src="./assets/footer-logo.png"
                alt="logo"
              />
            </div>
            <div className="mt-1">
              <h1 className="text-[1.39rem] font-extrabold tracking-wide text-gray-900">
                Quintile Finder
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
