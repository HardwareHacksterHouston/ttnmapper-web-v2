import {combineReducers} from 'redux'
import { UPDATE_MAP_POSITION } from '../constants'
import { mapConstants} from '../constants'


export function currentPosition(state, action) {
	if (typeof state == 'undefined') {
    //Demo position for now
		return {lat: -33.92945, long: 18.86326, zoom: 13}
  }

	switch (action.type) {
		case UPDATE_MAP_POSITION:
      return action.newPosition;
    default:
      return state;
  }
}

export function gatewayDetails(state, action) {
  if (typeof state == 'undefined') {
		return {}
  }

  switch (action.type) {
    case mapConstants.RECEIVE_GATEWAY_DETAILS:
      return Object.assign({}, state, {[action.gatewayID]: action.gatewayDetails})
    default:
      return state;
  }
}

export function visibleGateways(state, action) {
  if (typeof state == 'undefined') {
		return []
  }

  switch (action.type) {
    case mapConstants.RECEIVE_MAP_GATEWAYS:
      // Update the list of current gateways
      return action.listOfGateways
    default:
      return state;
  }
}

export const mapDetails = combineReducers({
  currentPosition: currentPosition,
  gatewayDetails: gatewayDetails,
  visibleGateways: visibleGateways
})
