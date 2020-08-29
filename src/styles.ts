import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    padding: theme.spacing(10)
  }
}))

export default useStyles
