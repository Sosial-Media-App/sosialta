import React from 'react'
import { WithRouter } from 'utils/Navigation'
import Layout from 'components/Layout'
import CardSosmed from 'components/CardSosmed'
import CardUpload from 'components/CardUpload'
import CardSuggestion from 'components/CardSuggestion'
import NavbarAnonym from 'components/NavbarAnonym'
import { Stack, Box } from '@mui/material'

const HomeAnonym = () => {
  return (
    <Layout>
      <NavbarAnonym></NavbarAnonym>
      <Stack direction="row" spacing={2} justifyContent="center" className="px-0 md:px-20">
        <Box flex={2}>
        <CardUpload></CardUpload>
        <CardSosmed></CardSosmed>
        </Box>
        <CardSuggestion></CardSuggestion>
      </Stack>
    </Layout>
  )
}

export default WithRouter(HomeAnonym)