import { useState } from "react";

// *** NOTE *** STATE NEEDS TO BE ADDED
const TopNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <header className="py-4 md:py-6">
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-10"
                  src="/public/assets/nav-logo.png"
                  alt=""
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-3 xl:space-x-5">
              <a
                href="#"
                className="text-base font-medium text-gray-900 rounded-xl focus:outline-none hover:bg-gray-900 hover:text-white font-pj border border-gray-900 px-3 py-2 active:opacity-70"
              >
                Home
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 rounded-xl focus:outline-none hover:bg-gray-900 hover:text-white font-pj border border-gray-900 px-3 py-2 active:opacity-70"
              >
                Import and Export
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="https://www.education.gov.za/Programmes/EMIS/EMISDownloads.aspx"
                className="text-base font-medium text-gray-900 rounded-xl focus:outline-none hover:bg-gray-900 hover:text-white font-pj border border-gray-900 px-3 py-2 active:opacity-70"
                target="_blank"
                title="National EMIS Government downloads page"
              >
                National EMIS Downloads
              </a>
            </div>
          </div>

          {/* Mobile nav */}
          {expanded && (
            <nav>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-none"
                  >
                    Home
                  </a>

                  <a
                    href="https://www.education.gov.za/Programmes/EMIS/EMISDownloads.aspx"
                    target="_blank"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-none"
                  >
                    National EMIS Downloads
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default TopNavbar;
