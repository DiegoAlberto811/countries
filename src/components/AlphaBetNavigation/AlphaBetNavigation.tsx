import { Box, Button, ButtonGroup } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import useStyles from './styles'

interface IAlphaBetNavigation {
  alphaBetSet: string[]
  selectedAlphaBet: string
  onClick: (val: string) => void
}

const AlphaBetNavigation = ({
  alphaBetSet,
  selectedAlphaBet,
  onClick,
}: IAlphaBetNavigation) => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:1120px)')

  return (
    <Box display="flex" className={classes.alphaBetSet}>
      <ButtonGroup
        color="primary"
        variant="contained"
        orientation={`${matches ? `horizontal` : `vertical`}`}
      >
        {console.log(alphaBetSet)}
        {alphaBetSet.map((alphabet) => (
          <Button
            color={alphabet === selectedAlphaBet ? 'primary' : 'default'}
            key={alphabet}
            onClick={() => onClick(alphabet)}
          >
            {alphabet}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}

export default AlphaBetNavigation
