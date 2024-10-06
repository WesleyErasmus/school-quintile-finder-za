const TopNavbar = () => {
  return (
    <>
      <div className="z-40 py-5 px-4 fixed top-0 w-full flex items-center bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-[1230px] w-full">
          <div className="flex items-center">
            <img
              className="mr-2 w-5 h-auto"
              src="./assets/footer-logo.png"
              alt="logo"
            />
            <div className="mt-1">
              <h1 className="text-lg font-extrabold tracking-wide">
                Quintile Finder SA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
