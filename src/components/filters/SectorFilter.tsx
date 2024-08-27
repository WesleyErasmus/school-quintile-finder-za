import Dropdown from "../Dropdown";

const placeholderFn = () => {
  console.log("function invoked");
};

const SectorFilter = () => {
  const filterOptions = [
    { name: "Public Schools", filterFunction: placeholderFn },
    { name: "Private Schools", filterFunction: placeholderFn },
  ];

const quintileIndex = 0;

  return (
    <>
      <Dropdown
        activeIndex={quintileIndex}
        buttonName={"Sector"}
        filterOptions={filterOptions}
      />
    </>
  );
};

export default SectorFilter;
