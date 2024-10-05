const TopNavbar = () => {
  return (
    <>
      <div className="z-40 fixed top-0 w-full py-3 px-2 flex items-center gap-x-2 text-xl font-extrabold text-[#284662] bg-gradient-to-b shadow-sm from-indigo-200 from-10% via-indigo-50 via-50% to-indigo-50 to-90%">
        <img className="w-auto h-5" src="./assets/3_3.png" alt="Logo" />
        <div className="flex items-start gap-1">
          Quintile Finder
          {/* <span className="text-indigo-600 text-lg">SA</span> */}
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
