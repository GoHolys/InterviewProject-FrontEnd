import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [info, setInfo] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((err) => setInfo(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { isLoading, info };
};

export default useFetch;
