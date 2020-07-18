import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  })
)

const BackdropLoader = () => {
  const classes = useStyles()
  const { isLoading } = useSelector((state: RootState) => state.app)

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default BackdropLoader
