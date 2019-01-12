import { observable, action } from 'mobx'

class AssetTrackr {
  @observable
  users = [
    {
      name: 'Ryan',
      age: 20
    }
  ]
  @observable
  transactions = []

  @action
  addUser(_user) {
    this.users.push(_user)
  }

  @action
  addTransaction(_tx) {
    this.transactions.push(_tx)
  }
}

const store = new AssetTrackr()
export default store
