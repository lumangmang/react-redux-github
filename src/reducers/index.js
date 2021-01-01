/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import {combineReducers} from "redux";
import todo from './todo';

const index = combineReducers({
    todo,
})

export default index;
