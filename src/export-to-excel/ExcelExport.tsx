import * as XLSX from "xlsx";
import { saveAs } from 'file-saver'
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

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
    // <button
    //   onClick={exportToExcel}
    //   className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg gap-x-2 text-white"
    // >
    //   <ArrowDownTrayIcon className="w-6 h-6" />

    //   <span className="hidden">Export to Excel</span>
    // </button>
    <button
      onClick={exportToExcel}
      className="flex items-center rounded-lg h-10 gap-x-2 text-gray-600"
    >
      <ArrowDownTrayIcon className="w-6 h-6" />

      <span className="hidden">Export to Excel</span>
    </button>
  );

};

export default ExcelExport;