
import {Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

function contact() {
    const  params = useParams()
    // const location = useLocation()
    // console.log(location.state)
  return (
    <>
   <Box>
    <Typography variant='h1' >
     Contact {params.id}
    </Typography>
   </Box>
    </>
  )
}

export default contact