import { useSearchParams } from "react-router-dom";

/** Returns true when the URL contains ?app (e.g. /about?app) */
const useAppMode = () => {
  const [params] = useSearchParams();
  return params.has("app");
};

export default useAppMode;
