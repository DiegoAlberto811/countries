import React from 'react'

import { CssBaseline, Container } from '@material-ui/core'

import NavBar from '../containers/NavBar'
import CountriesList from '../containers/CountriesList'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <CountriesList />
      </Container>
    </>
  )
}
