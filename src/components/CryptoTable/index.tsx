import React from 'react'
import { observer, inject } from 'mobx-react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import { TCurrency } from '../../types'
import CurrenciesStore from '../../stores/CurrenciesStore'

import useStyles from './styles'

const UPDATE_INTERVAL = 30

interface ICryptoTable {
  currenciesStore?: CurrenciesStore
}

function CryptoTable ({ currenciesStore }: ICryptoTable) {
  const styles = useStyles()
  const currencies: TCurrency[] = currenciesStore!.getItems
  const isFetching: Boolean = currenciesStore!.checkFetching

  React.useEffect(() => {
    currenciesStore!.fetchCurrencies()

    const interval = setInterval(() => {
      currenciesStore!.fetchCurrencies()
    }, UPDATE_INTERVAL * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <TableContainer
      component={Paper}
      className={styles.table}
    >
      {isFetching ? (
        <div className={styles.preloader}>
          <CircularProgress />
        </div>
      ) : (
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>FullName</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h volume</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currencies.map((currency: TCurrency) => (
              <TableRow key={currency.name}>
                <TableCell>
                  <img src={currency.imageUrl} />
                </TableCell>
                <TableCell>{currency.name}</TableCell>
                <TableCell>{currency.fullName}</TableCell>
                <TableCell>{`$${currency.price}`}</TableCell>
                <TableCell>{`$${currency.volume24Hour.toFixed(2)}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  )
}

export default inject('currenciesStore')(observer(CryptoTable))
