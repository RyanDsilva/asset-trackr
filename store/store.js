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
    const newUser = bigchain.generateKeypair(_name)
    newUser['name'] = _name
    this.users = [...this.users, newUser]
    this.responseText +=
      '<br>Created user: ' + newUser.name + ' (' + newUser.publicKey + ')'
  }

  @action
  addTransaction(_asset, _meta, _uname) {
    let user = {}
    this.users.forEach(x => {
      if (x.name == _uname) {
        user = x
      }
    })
    bigchain.createAsset(this.connection, _asset, _meta, user, _tx => {
      this.transactions = [...this.transactions, _tx]
      this.responseText += '<br>Created Asset: ' + _tx.asset.data.name
    })
  }

  @action
  transferTransaction(_assetName, _meta, _currentOwnerName, _newOwnerName) {
    let currentOwner = {}
    let newOwner = {}
    let transaction = {}
    this.users.forEach(x => {
      if (x.name == _currentOwnerName) {
        currentOwner = x
      } else if (x.name == _newOwnerName) {
        newOwner = x
      }
    })
    this.transactions.forEach(tx => {
      if (tx.asset.data.name == _assetName) {
        transaction = tx
      }
    })
    bigchain.transferAsset(
      this.connection,
      transaction,
      _meta,
      currentOwner,
      newOwner,
      _tx => {
        this.transactions = [...this.transactions, _tx]
        console.log(_tx)
        this.responseText += '<br>Asset Transferred!'
      }
    )
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
