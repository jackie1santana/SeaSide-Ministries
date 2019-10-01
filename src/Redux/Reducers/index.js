import { combineReducers } from 'redux';
import ClickedNav from './NavMenu'
import isLogged from './isLogged'

const allReducers = combineReducers({
    ClickedNav,
    isLogged
})

export default allReducers;