import { observable, computed, action } from 'mobx'

import { TCurrency } from '../types'

export const CURRENCIES_NAME = 'CURRENCIES'

class CurrenciesStore {
  @observable private currencies: TCurrency[] = []
  @observable private isFetching = false

  @computed
  get getItems (): TCurrency[] {
    return this.currencies
  }

  @computed
  get checkFetching (): Boolean {
    return this.isFetching
  }

  @action
  async fetchCurrencies () {
    this.isFetching = true

    const LIMIT = 10
    const TSYM = 'USD'
    const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=${LIMIT}&tsym=${TSYM}`
    const json = await fetch(url).then(res => res.json())
    const currencies = await json.Data.map((coin: any) => {
      const result: TCurrency = {
        name: coin.CoinInfo.Name,
        fullName: coin.CoinInfo.FullName,
        imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
        price: coin.RAW.USD.PRICE,
        volume24Hour: coin.RAW.USD.VOLUME24HOUR
      }

      return result
    })

    this.currencies = currencies
    this.isFetching = false
  }

}

export default CurrenciesStore
