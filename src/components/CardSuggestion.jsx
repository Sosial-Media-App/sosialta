import { Box } from '@mui/material'
import React from 'react'

const CardSuggestion = () => {
  return (
    <Box 
     flex={1}
     p={2}
     sx={{display: {xs : 'none', md : 'block'}}}>
      <div className='p-5 h-60 bg-white rounded-xl'>

      </div>
    </Box>
  )
}

export default CardSuggestion