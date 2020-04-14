// import store from './store/store'
import configureStore from './store/configureStore'
import {bugAdded, bugRemoved} from './store/bugs';
import{projectAdded} from './store/projects';
const store=configureStore();


store.dispatch(bugAdded({description:"Bug one"}));
store.dispatch(bugAdded({description:"Bug two"}));
store.dispatch(bugRemoved({id:1}));
store.dispatch(bugAdded({description:"Bug three"}));

store.dispatch(projectAdded({name:"project1"}))
console.log(store.getState());