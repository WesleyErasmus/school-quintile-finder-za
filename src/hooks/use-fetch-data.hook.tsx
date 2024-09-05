import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (searchTerm: string | number) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         const response = await axios.get(
    //           `http://localhost/school-quintile-finder-za/server/controllers/fetch-data.php?query=${searchTerm}`
    //         );
    //         setData(response.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //         setError(error)
    //     } finally {
    //         setIsLoading(false);
    //     }
    //   };
    
    //   fetchData();
    // }, [searchTerm]);

    return { data, isLoading, error }
    
}

export default useFetchData;