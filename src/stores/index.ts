import { default as CurrenciesStore, CURRENCIES_NAME } from './CurrenciesStore'

type TStore = {
  [key: string]: object
}

const stores: TStore = {
  currenciesStore: new CurrenciesStore()
}

export default stores
