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
      className="group flex items-center justify-center gap-3 p-3 h-9 font-medium text-no-wrap bg-primary-600 rounded-lg active:ring-1 active:ring-primary-900 hover:shadow-lg hover:bg-primary-500"
    >
      <ArrowDownTrayIcon className="w-6 h-6 text-white" />

      <div className="text-white text-sm">
        Export to Excel
      </div>
    </button>
  );
};

export default ExportButton;
