import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_TITLE } from "../constants";

const usePageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const titleMap: { [key: string]: string } = {
      "/": "Home",
      "/home": "Home",
      "/about": "About",
      "/contact": "Contact",
      "/dashboard": "Dashboard",
    };
    document.title = titleMap[path] ? `${titleMap[path]} | ${PAGE_TITLE}` : PAGE_TITLE;
  }, [location]);
}

export default usePageTitle;