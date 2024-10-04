const TopNavbar = () => {
  return (
    <>
      <div className="z-40 fixed top-0 w-full py-3 px-2 flex items-center gap-x-2 text-2xl font-extrabold bg-gradient-to-b shadow-sm from-indigo-200 from-10% via-indigo-50 via-50% to-indigo-50 to-90%">
        <img className="w-14 h-auto" src="./assets/nav-header.png" alt="Logo" />
        <div className="flex items-start gap-1">
          <span>Quintile</span>
          <span>Finder</span>{" "}
          <span className="text-indigo-600 text-lg">SA</span>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
