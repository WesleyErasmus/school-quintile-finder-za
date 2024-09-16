import * as XLSX from "xlsx";
import { saveAs } from 'file-saver'

interface ExcelExport {
  data: Array<object>;
  fileName: string;
}


const ExcelExport = (props: ExcelExport) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(props.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${props.fileName}.xlsx`);
  };

  return (
    <div className="flex items-center mt-4 gap-x-3">
      <button
        onClick={exportToExcel}
        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-900 rounded-lg sm:w-auto gap-x-2 hover:bg-gray-600"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.66667V12.5M10 12.5L5.83333 8.33333M10 12.5L14.1667 8.33333M2.5 13.3333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.3333"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Export to Excel</span>
      </button>
    </div>
  );

};

export default ExcelExport;