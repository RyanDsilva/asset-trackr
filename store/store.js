import { observable, action } from 'mobx'
import bigchain from 'easy-bigchain'

class AssetTrackr {
  @observable
  users = []
  @observable
  transactions = []
  @observable
  connection = {}
  @observable
  responseText = ''

  @action
  setConnection() {
    this.connection = bigchain.connect('https://test.bigchaindb.com/api/v1/')
    this.responseText = 'Connected to Test Blockchain'
  }

  @action
  addUser(_name) {
    const newUser = bigchain.generateKeypair()
    newUser['name'] = _name
    this.users = [...this.users, newUser]
    this.responseText += '<br>Created user: ' + _name
  }

  @action
  addTransaction(_tx) {
    this.transactions = [...this.transactions, _tx]
  }

  @action
  clearData() {
    this.users = []
    this.transactions = []
    this.responseText = ''
  }
}

const store = new AssetTrackr()
export default store
