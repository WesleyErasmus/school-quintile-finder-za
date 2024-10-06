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
      <button
        onClick={exportToExcel}
        className="flex items-center p-3 h-10 text-sm bg-slate-600 rounded-xl gap-x-2 hover:bg-slate-700 text-white active:ring-1 active:ring-gray-900"
      >
       <ArrowDownTrayIcon className="w-6 h-6 text-white" />

        <span className="hidden">Export to Excel</span>
      </button>
  );

};

export default ExcelExport;