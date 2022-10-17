import React from 'react'
import { WithRouter } from 'utils/Navigation'
import Layout from 'components/Layout'
import CardSosmed from 'components/CardSosmed'
import CardUpload from 'components/CardUpload'
import CardSuggestion from 'components/CardSuggestion'
import { Stack, Box } from '@mui/material'

const HomeAnonym = () => {
  return (
    <Layout>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box flex={2} bgcolor={'pink'}>
        <CardUpload></CardUpload>
        <CardSosmed></CardSosmed>
        </Box>
        <CardSuggestion></CardSuggestion>
      </Stack>
    </Layout>
  )
}

export default WithRouter(HomeAnonym)