import { Breadcrumbs, Typography, Link as MUILink } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const useBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <MUILink component={Link} underline="hover" color="inherit" to="/home">
        Home
      </MUILink>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography color="text.primary" key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <MUILink component={Link} underline="hover" color="inherit" to={to} key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </MUILink>
        );
      })}
    </Breadcrumbs>
  );
};
export default useBreadcrumbs;