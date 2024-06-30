import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (


    <footer className="footer">
      <Box mt="80px" bgcolor="#FFF3F4" height="150px">
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️</Typography>
      </Box>
      <div className="footerContainer">
        <p className="copyright">copyright© Anshu Singh</p>
      </div>
    </footer>

  )
}

export default Footer
