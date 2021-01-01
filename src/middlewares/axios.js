/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from '../actions/types'

const axios = () => {
    return dispatch => {
        dispatch({
            type: Types.GET_TODOLIST,
        });
    }
}
export default axios;
