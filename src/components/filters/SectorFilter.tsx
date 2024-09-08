import Dropdown from "../Dropdown";

const placeholderFn = () => {
  console.log("function invoked");
};

const SectorFilter = () => {
  const filterOptions = [
    { name: "Public Schools", filterFunction: placeholderFn },
    { name: "Private Schools", filterFunction: placeholderFn },
  ];

const optionsIndex = 0;

  return (
    <>
      <Dropdown
        activeIndex={optionsIndex}
        buttonName={"Sector"}
        filterOptions={filterOptions}
      />
    </>
  );
};

export default SectorFilter;
