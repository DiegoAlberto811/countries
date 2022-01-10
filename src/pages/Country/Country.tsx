import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { Typography, Container, Button } from '@material-ui/core'

import ThemeContext from '../../context'
import { AppState } from '../../types'
import useStyles from './styles'

export default function Country() {
  const { theme } = useContext(ThemeContext)
  const { name } = useParams()
  const history = useHistory()
  const classes = useStyles()

  const country = useSelector((state: AppState) =>
    state.countries.countries.find(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    )
  )
  if (!country) {
    return <div>Country not available</div>
  }
  return (
    <Container
      className={classes.container}
      maxWidth={false}
      style={{ backgroundColor: '#000080' }}
    >
      <img className={classes.img} src={country.flag} alt={country.name} />
      <Typography variant="h5">{country.name}</Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Capital
      </Typography>
      <Typography variant="body1">{country.capital}</Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Population
      </Typography>
      <Typography variant="body1">
        {new Intl.NumberFormat('fi-FI', { useGrouping: true }).format(
          country.population
        )}
      </Typography>

      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        alpha2Code
      </Typography>
      <Typography gutterBottom variant="body1">
        {country.alpha2Code}
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: 'white' }}
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
    </Container>
  )
}
