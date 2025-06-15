// import { red } from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';

import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ef6d58',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});