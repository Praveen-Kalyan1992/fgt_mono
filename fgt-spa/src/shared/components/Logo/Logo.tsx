import React from 'react';
import { Box, SvgIcon, SvgIconProps } from '@mui/material';
import fgt from '../../../assets/images/FGT.jpg';

const FGTLogoSvg: React.FC<SvgIconProps> = (props) => (
//   <SvgIcon {...props}>
//     {/* Replace the path below with your custom FGT logo vector data */}
//     <path d="M2 2h20v20H2z M7 7h10v10H7z" />
//   </SvgIcon>
<img src={fgt} alt="fgt" height={40} width={60} />
);

const Logo: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <FGTLogoSvg fontSize="large" color="primary" />
    </Box>
  );
};

export default Logo;
