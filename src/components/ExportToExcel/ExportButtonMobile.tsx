import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

interface ExcelExport {
  data: Array<object>;
  fileName: string;
}

const ExportButtonMobile = (props: ExcelExport) => {
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
      className="flex items-center justify-center rounded-full h-10 w-10 text-gray-600 active:bg-slate-100"
    >
      <ArrowDownTrayIcon className="w-6 h-6 active:text-gray-900" />
    </button>
  );
};

export default ExportButtonMobile;
