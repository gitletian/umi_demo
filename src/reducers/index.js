
// 可以把每一个页面/模块都写一个store文件，然后在index中合并成一个store
import { combineReducers } from 'redux';
import homeStore from './home';

// 合并 store
const appStore = combineReducers({
    homeStore,
});

export default appStore;

