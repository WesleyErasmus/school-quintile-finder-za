import { useState } from "react";
import { useClickOutside } from "../hooks/handle-click-outside.hook";
import { FilterOption } from "../types/FilterOptions";
import { useDataContext } from "../contexts/data-context.hook";

const Dropdown = (props: {
  buttonName: string;
  filterOptions: FilterOption[];
  activeIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const {setSelectedSchool} = useDataContext()

  const closeSelectedSchoolComponent = () => {
    setSelectedSchool(null);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const ref = useClickOutside(closeDropdown);
  const accordionRef = useClickOutside(() => {
    setActiveIndex(-1);
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <div className="hidden sm:inline-block">
        <div
          ref={ref}
          className="dropdown text-left relative inline-flex group"
        >
          <button
            onClick={toggleDropdown}
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle inline-flex justify-center items-center gap-2 px-3 py-[8px] text-xs font-medium text-gray-900 bg-white rounded-full cursor-pointer text-center shadow-xs transition-all hover:bg-gray-50 shadow-md border border-1 border-gray-150"
            title="Display all schools in a selected filter group."
          >
            {props.buttonName}
            {!isOpen ? (
              <svg
                className="w-2.5 h-2.5 text-gray-400 transition-transform duration-300 ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-2.5 h-2.5 text-gray-400 transition-transform duration-300 ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.3131C8.35239 5.1363 8.64761 5.1363 8.83914 5.3131L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            )}
          </button>
          <div
            className={`z-50 dropdown-menu rounded-md shadow-lg bg-white absolute top-full left-1/2 transform -translate-x-1/2 w-44 ${
              isOpen ? "visible" : "hidden"
            }`}
            aria-labelledby="dropdown-on-click"
          >
            <ul className="pt-2">
              {props.filterOptions.map((option, index) => (
                <li key={index}>
                  <a
                    onClick={() => {
                      closeSelectedSchoolComponent()
                      option.filterFunction()
                      closeDropdown()
                    }}
                    className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                  >
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* mobile filter menu */}
      <div className="sm:hidden">
        <div className="max-w-screen-md mx-auto shadow-xs">
          <div>
            <h3 ref={accordionRef}>
              <button
                onClick={() => toggleAccordion(props.activeIndex)}
                type="button"
                className="w-full py-3 text-sm text-left rounded-xl border border-gray-200 bg-white text-gray-900"
              >
                <div className="px-4 flex items-center justify-between font-medium">
                  <span>{props.buttonName}</span>
                  {activeIndex === props.activeIndex ? (
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
                        strokeWidth="2"
                        strokeLinecap="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  )}
                </div>
                <div
                  className={`${
                    activeIndex === props.activeIndex ? "visible" : "hidden"
                  }`}
                >
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

export default Dropdown;
