import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'
import store from '../store'

const createAlert = alert => ({
  type: SHOW_ALERT,
  payload: alert
})

export const showAlert = alert => store.dispatch(createAlert(alert))


const hideAlert = () => ({
  type: HIDE_ALERT,
  payload: null
})

export const hideAlertAction = () => store.dispatch(hideAlert())
