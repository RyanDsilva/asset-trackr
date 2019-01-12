import Vue from 'vue'
import { observable, isObservable, toJS } from 'mobx'
import VueMobx from 'vue-mobx'

Vue.use(VueMobx, {
  toJS: toJS,
  isObservable: isObservable,
  observable: observable
})
