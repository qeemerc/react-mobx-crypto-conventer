import { observable, computed, action } from 'mobx'

import { TCoin } from '../types'

export const CURRENCIES_NAME = 'CURRENCIES'

class CurrenciesStore {
  @observable currencies: TCoin[] = []

  constructor (initialCurrencies: TCoin[] = []) {
    this.currencies = initialCurrencies
  }
}

export default CurrenciesStore
