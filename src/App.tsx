import React from 'react'

import useStyles from './styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import CryptoTable from './components/CryptoTable'
import CryptoConventer from './components/CryptoConventer'

function App() {
  const styles: any = useStyles()

  return (
    <div>
      <Container maxWidth='lg' className={styles.grid}>
        <Grid container>
          <Grid item xs={8}>
            <CryptoTable />
          </Grid>
          <Grid item xs={4}>
            <CryptoConventer />
          </Grid>
        </Grid>
      </Container>

      <CssBaseline />
    </div>
  )
}

export default App
