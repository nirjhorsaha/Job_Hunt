import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Career Hub`;
  }, []);
};

export default useTitle;
