import Dropdown from "../Dropdown";

const placeholderFn = () => {
  console.log("function invoked");
};

const ProvinceFilter = () => {
  const filterOptions = [
    { name: "Eastern Cape", filterFunction: placeholderFn },
    { name: "Free State", filterFunction: placeholderFn },
    { name: "Gauteng", filterFunction: placeholderFn },
    { name: "KwaZulu-Natal", filterFunction: placeholderFn },
    { name: "Limpopo", filterFunction: placeholderFn },
    { name: "Mpumalanga", filterFunction: placeholderFn },
    { name: "Northern Cape", filterFunction: placeholderFn },
    { name: "North West", filterFunction: placeholderFn },
    { name: "Western Cape", filterFunction: placeholderFn },
  ];

  return (
    <>
      <Dropdown buttonName={"Province"} filterOptions={filterOptions} />
    </>
  );
};

export default ProvinceFilter;