import Dropdown from "../Dropdown";

const placeholderFn = () => {
  console.log("function invoked");
};

const PhaseFilter = () => {
  const filterOptions = [
    { name: "Pre-Primary Schools", filterFunction: placeholderFn },
    { name: "Primary Schools", filterFunction: placeholderFn },
    { name: "Intermediate Schools", filterFunction: placeholderFn },
    { name: "Secondary Schools", filterFunction: placeholderFn },
    { name: "Combined Schools", filterFunction: placeholderFn },
    { name: "Specialized Schools", filterFunction: placeholderFn },
  ];

  const optionsIndex = 0;

  return (
    <>
      <Dropdown
        buttonName={"Phase"}
        filterOptions={filterOptions}
        activeIndex={optionsIndex}
      />
    </>
  );
};

export default PhaseFilter;
