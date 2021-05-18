import store from "./store/store";
import * as actions from "./store/action";

console.log(store);

store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));
store.dispatch(actions.bugAdded("salom bu yomon bug rosa jonga tegdi"));

console.log("Hello World!", store.getState());
