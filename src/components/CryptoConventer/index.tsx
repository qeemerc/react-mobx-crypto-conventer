import React from 'react'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import useStyles from './styles'

const CryptoConventer = () => {
  const styles: any = useStyles()

  return (
    <Paper className={styles.wrap}>
      <div className={styles.currencyItem}>
        <FormControl>
          <TextField
            type='number'
            label='Сумма'
            className={styles.input}
            variant='outlined'
            size='small'
          />
        </FormControl>

        <FormControl>
          <Select
            className={styles.select}
            variant='outlined'
            value='RUB'
          >
            <MenuItem value='RUB'>
              RUB
            </MenuItem>
            <MenuItem value='USD'>
              USD
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.currencyItem}>
        <FormControl>
          <TextField
            type='number'
            label='Сумма'
            className={styles.input}
            variant='outlined'
            size='small'
          />
        </FormControl>

        <FormControl>
          <Select
            className={styles.select}
            variant='outlined'
            value='USD'
          >
            <MenuItem value='USD'>
              USD
            </MenuItem>
            <MenuItem value='RUB'>
              RUB
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </Paper>
  )
}

export default CryptoConventer
