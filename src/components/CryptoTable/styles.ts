import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    margin: '0 auto',
    width: '95%',
    '& img': {
      width: '25px'
    }
  },
  preloader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }
}))

export default useStyles
