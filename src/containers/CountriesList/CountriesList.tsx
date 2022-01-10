import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'
import {
  useMediaQuery,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Divider,
  CircularProgress,
  Box,
} from '@material-ui/core'

import { fetchCountriesFromSaga } from '../../redux/actions'
import ThemeContext from '../../context'
import { AppState } from '../../types'
import useStyles from './styles'
import { AlphaBetNavigation } from '../../components/AlphaBetNavigation'

function CountriesList() {
  // countries is already sorted (ascending) in the saga
  let data = useSelector((state: AppState) => state.countries.countries)
  const error = useSelector((state: AppState) => state.countries.exception)
  const searchKey = useSelector((state: AppState) => state.ui.searchKey)
  const [ascendingOrder, setSortOrder] = useState(true)
  const [countries, setCountries] = useState(data)
  const [alphaBetSet, setAlphaBetSet] = useState<string[]>([])
  const [selectedAlphaBet, seletAlphaBet] = useState<string>('')
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  // dispatch action once
  useEffect(() => {
    dispatch(fetchCountriesFromSaga())
  }, [dispatch])

  // render once getAllCountries service return data (promise resolved)
  useEffect(() => {
    const filteredCountries = data.filter(({ name }) =>
      name.toLowerCase().includes(searchKey.toLowerCase())
    )
    setCountries(filteredCountries)
  }, [data, searchKey])

  useEffect(() => {
    let alphaBets = countries.map((country) => {
      return country.name[0].toLocaleUpperCase()
    })
    alphaBets = alphaBets.filter((v, i, a) => a.indexOf(v) === i)
    console.log(alphaBets)
    setAlphaBetSet(alphaBets)
  }, [countries])

  const handleSort = () => {
    setSortOrder(!ascendingOrder)
    countries.reverse()
    setCountries(countries)
  }

  const classes = useStyles()

  const renderMobile = () => (
    <div style={{ marginTop: 60 }}>
      <AlphaBetNavigation
        alphaBetSet={alphaBetSet}
        selectedAlphaBet={selectedAlphaBet}
        onClick={seletAlphaBet}
      />
      {countries
        .filter(({ name }) =>
          name.toLowerCase().includes(searchKey.toLowerCase())
        )
        .map((country) => (
          <div className={classes.root} key={country.name}>
            <Paper className={classes.paper}>
              <Grid container direction="column" alignItems="center">
                <Typography variant="h5">
                  <Link
                    to={`/country/${country.name}`}
                    className={classes.countryName}
                    style={{ color: theme.color }}
                  >
                    {country.name}
                  </Link>
                </Typography>
              </Grid>
            </Paper>
          </div>
        ))}
    </div>
  )

  const renderDesktop = () => (
    <>
      <AlphaBetNavigation
        alphaBetSet={alphaBetSet}
        selectedAlphaBet={selectedAlphaBet}
        onClick={seletAlphaBet}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>
                <TableSortLabel
                  direction={ascendingOrder ? 'asc' : 'desc'}
                  onClick={handleSort}
                >
                  Name
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries
              .filter(
                ({ name }) =>
                  !selectedAlphaBet ||
                  name[0].toLocaleUpperCase() === selectedAlphaBet
              )
              .map((country) => (
                <TableRow key={country.name}>
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/country/${country.name}`}
                      className={classes.countryName}
                    >
                      {country.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )

  // Responsive render
  const themeMUI = useTheme()
  const desktopView = useMediaQuery(themeMUI.breakpoints.up('sm')) // min view width = 600px

  return (
    <>
      {desktopView ? renderDesktop() : renderMobile()}
      {error && <div>Error occur</div>}
      {data.length < 1 && (
        <div className={classes.loading}>
          <CircularProgress
            size="5rem"
            style={{ color: theme.color }}
            disableShrink={true}
          />
        </div>
      )}
    </>
  )
}

export default CountriesList
