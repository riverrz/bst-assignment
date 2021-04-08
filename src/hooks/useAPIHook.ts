import { useCallback, useEffect, useState } from "react";

interface useAPIProps<T> {
  initialData?: T[];
  getData: (params?: any) => Promise<T[]>;
}

// A custom hook for maintaining error, loading states for an api call
// Can be extended to support pagination
function useAPIHook<T>(props: useAPIProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { initialData, getData } = props;

  useEffect(() => {
    if (initialData) {
      setData(initialData);
    }
  }, [initialData]);

  const fetchData = useCallback(
    async (params?: any) => {
      setLoading(true);
      try {
        // Fetch the data using getData prop and maintain it in local state
        const responseData = await getData(params);
        setData(responseData);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
      setLoading(false);
    },
    [getData]
  );

  return {
    loading,
    error: !!errorMsg,
    errorMsg,
    data,
    fetchData,
    setData,
  };
}

export default useAPIHook;
