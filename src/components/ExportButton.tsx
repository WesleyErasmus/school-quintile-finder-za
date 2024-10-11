import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

interface ExcelExport {
  data: Array<object>;
  fileName: string;
}

const ExportButton = (props: ExcelExport) => {
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
      className="flex items-center justify-center p-3 h-10 text-no-wrap bg-white border border-gray-300 rounded-lg"
    >
      <ArrowDownTrayIcon className="mr-3 w-6 h-6 text-slate-700" />

      <div className="text-gray-900 text-sm">Export to Excel</div>
    </button>
  );
};

export default ExportButton;
