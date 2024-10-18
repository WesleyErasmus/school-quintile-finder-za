import { addDoc, collection } from "firebase/firestore";
import { fireStoreDatabase } from "../main";
import { useLoadingContext } from "../contexts/loading-context.hook";
import { useErrorContext } from "../contexts/error-context.hook";

const useSendErrorReport = () => {
  const {
    setLoadingSearchReport,
    setLoadingFilterReport,
  } = useLoadingContext();
  const {
    setReportSearchError,
    setReportFilterError,
    setSearchReportSendSuccess,
    setFilterReportSendSuccess,
  } = useErrorContext();

  // Report search bar data error
  const reportSearchError = async () => {
    try {
      setLoadingSearchReport(true);
      const docRef = await addDoc(
        collection(fireStoreDatabase, "userErrorReports"),
        {
          report: "A Search bar data error has been reported",
        }
      );
      setLoadingSearchReport(false);
      setReportSearchError(false);
      setSearchReportSendSuccess(true);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setReportSearchError(true);
      console.error("Error adding document: ", e);
      setLoadingSearchReport(false);
    }
  };

  // Report filter data error
  const reportFilterError = async () => {
    try {
      setLoadingFilterReport(true);
      const docRef = await addDoc(
        collection(fireStoreDatabase, "userErrorReports"),
        {
          report: "A filter data error has been reported",
        }
      );
      setLoadingFilterReport(false);
      setReportFilterError(false);
      setFilterReportSendSuccess(true);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setReportFilterError(true);
      console.error("Error adding document: ", e);
      setLoadingFilterReport(false);
    }
  };

  return { reportSearchError, reportFilterError };
};

export default useSendErrorReport;
