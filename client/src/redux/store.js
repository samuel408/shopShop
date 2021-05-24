  
import { createStore } from 'redux';
import reducer from '../utils/reducers';
//creates a store that we can connect to globalstore
const store = createStore(reducer);  

export default store;