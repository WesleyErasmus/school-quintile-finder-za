import Dropdown from "../Dropdown";

const placeholderFn = () => {
  console.log("function invoked");
  
}

const QuintileFilter = () => {
  const filterOptions = [
    { name: "Quintile 1", filterFunction: placeholderFn },
    { name: "Quintile 2", filterFunction: placeholderFn },
    { name: "Quintile 3", filterFunction: placeholderFn },
    { name: "Quintile 4", filterFunction: placeholderFn },
    { name: "Quintile 5", filterFunction: placeholderFn },
  ];

const quintileIndex = 0;

  return (
    <>
      <Dropdown
        buttonName={"Quintiles"}
        filterOptions={filterOptions}
        activeIndex={quintileIndex}
      />
    </>
  );
};

export default QuintileFilter;
