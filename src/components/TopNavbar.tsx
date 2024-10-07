const TopNavbar = () => {
  return (
    <>
      {/* <div className="z-40 py-5 px-4 fixed top-0 w-full flex items-center bg-gradient-to-t from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% border-b border-slate-100"> */}
      <div className="z-40 py-4 px-4 flex items-center bg-gradient-to-t from-primary-50 from-10% via-primary-50 via-50% to-primary-100 to-90% shadow-md shadow-slate-100">
        <div className="mx-auto max-w-[1230px] w-full">
          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center bg-white w-9 h-9 rounded-full shadow-md">
              <img
                className="w-6 h-6"
                src="./assets/footer-logo.png"
                alt="logo"
              />
            </div>
            <div className="mt-1">
              <h1 className="text-[1.39rem] font-extrabold tracking-wide text-gray-950">
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
