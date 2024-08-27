import { useState } from "react";

interface FilterOption {
  name: string;
  filterFunction: () => void;
}

const MobileDropdown = (props: {
  buttonName: string;
  filterOptions: FilterOption[];
}) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);


  const toggleAccordion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <>

      <div className="sm:hidden">
        <div className="max-w-screen-md mx-auto shadow-xs">
          <div>
            <h3>
              <button
                onClick={() => toggleAccordion(0)}
                type="button"
                className="w-full py-3 text-sm text-left rounded-xl border border-gray-200 bg-white text-gray-900"
              >
                <div className="px-4 flex items-center justify-between font-medium">
                  <span>{props.buttonName}</span>
                  {expandedItem === 0 ? (
                    <svg
                      className="w-2.5 h-2.5 text-gray-500 transition-transform duration-300 ease-in-out"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="dropdown-open:rotate-180 dropdown-open:text-white w-2.5 h-2.5 text-gray-500 transition-transform duration-300 ease-in-out"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.3131C8.35239 5.1363 8.64761 5.1363 8.83914 5.3131L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  )}
                </div>
                <div className={`${expandedItem === 0 ? "visible" : "hidden"}`}>
                  <ul className="pt-2 text-left font-normal">
                    {props.filterOptions.map((option, index) => (
                      <li key={index}>
                        <a
                          onClick={option.filterFunction}
                          className="block py-2 px-5 text-sm hover:bg-gray-100 text-gray-700"
                        >
                          {option.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDropdown;
