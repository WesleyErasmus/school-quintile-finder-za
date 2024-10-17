import { addDoc, collection } from "firebase/firestore";
import { fireStoreDatabase } from "../main";
import { useDataContext } from "../contexts/data-context.hook";

const useSendErrorReport = () => {
  const {setIsLoading, setError , setErrorSent} = useDataContext();

  // Report search bar data error
  const reportSearchError = async () => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(
        collection(fireStoreDatabase, "userErrorReports"),
        {
          report: "A Search bar data error has been reported",
        }
      );
      setIsLoading(false);
      setError(false);
      setErrorSent(true)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setError(true);
      console.error("Error adding document: ", e);
      setIsLoading(false);
    }
  };

  // Report filter data error
  const reportFilterError = async () => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(
        collection(fireStoreDatabase, "userErrorReports"),
        {
          report: "A filter data error has been reported",
        }
      );
      setIsLoading(false);
      setError(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setError(true);
      console.error("Error adding document: ", e);
      setIsLoading(false);
    }
  };

  return { reportSearchError, reportFilterError };
};

export default useSendErrorReport;
