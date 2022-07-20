import {createStore} from "@reduxjs/toolkit";
import { reducers } from "./reduce"
       
let store = createStore(reducers);

export default store;
