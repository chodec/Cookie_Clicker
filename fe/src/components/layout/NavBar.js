import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className='bg-gray-900'>
          <Typography variant="h6">
            Cookie Clicker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
