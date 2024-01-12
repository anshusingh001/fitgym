import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from "../assets/icons/logogym.jpg"



const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '150px', height: '120px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', marginBottom:'25px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' ,marginBottom:'25px'}}>Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar
