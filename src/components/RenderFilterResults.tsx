import { School } from "../types/School";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import Pagination from "./Pagination";

const RenderFilterResults = () => {
const {
  filteredData,
  isLoadingFilteredData,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalCount,
} = useDataContext();
  
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  return (
    <>
      {isLoadingFilteredData ? (
        <Loader />
      ) : filteredData && filteredData.length > 0 ? (
        <section className="container mx-auto max-w-5xl">
          <h2 className="text-lg mt-5 text-center font-medium text-gray-800 ">
            Results
          </h2>
          <div className="sm:flex sm:items-end sm:justify-between">
            <div className="flex items-center gap-x-3">
              <div className="text-sm">
                <label htmlFor="itemsPerPage" className="mr-2">
                  Items per page:
                </label>
                <select
                  id="itemsPerPage"
                  className="border border-gray-300 rounded-lg"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>School name</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          Quintile
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          Province
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          Phase
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          Sector
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800"
                        >
                          Fee Paying
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredData.map((school: School, index: number) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.name}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.quintile}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.province}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.phase}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.sector}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {school.fee_paying}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </section>
      ) : null}
    </>
  );
};

export default RenderFilterResults;
