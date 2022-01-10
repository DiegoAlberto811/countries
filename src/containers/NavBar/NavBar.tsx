import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ThemeContext from '../../context'
import SearchField from '../../components/SearchField'
import { AppState } from '../../types'
import useStyles from './styles'

//MUI component

export default function NavBar() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)
  const inCart = useSelector((state: AppState) => state.countries.inCart)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isCartOpen = Boolean(anchorEl)

  const handleCartOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleCartClose = () => setAnchorEl(null)

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ backgroundColor: '#000080' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Countries
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchField /> {/* Custom component modified from MUI */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
