import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
  wrap: {
    padding: '10px',
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  currencyItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    '&:last-of-type': {
      marginBottom: 0
    }
  },
  input: {
    marginRight: '15px',
    fontSize: '12px'
  },
  select: {
    width: '150px',
    height: '40px',
    textAlign: 'left',
    fontSize: '14px'
  }
}))

export default useStyles
