import React from 'react'
import { WithRouter } from 'utils/Navigation'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'
import CardSosmed from 'components/CardSosmed'
import CardSuggestion from 'components/CardSuggestion'
import { Stack, Box } from '@mui/material'

const ContentDetail = () => {
  return (

    <Layout>
      <Navbar/>
      <div className='w-full px-5 md:px-16 py-3'>
        <button className='bg-[#FEF3EB] w-56 rounded-md py-2 px-3 text-delete font-semibold'>Back to Home</button>
      </div>
      <Stack direction="row" spacing={2} justifyContent="center" className="px-0 md:px-20">
        <Box flex={2}>
        <CardSosmed/>
        </Box>
        <CardSuggestion/>
      </Stack>
    </Layout>
    
  )
}

export default WithRouter(ContentDetail)