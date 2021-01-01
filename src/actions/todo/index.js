/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from '../types'

export function onValueChange(value) {
    return dispatch => {
        dispatch({
            type: Types.VALUE_CHANGE,
            value,
        })
    }
}

export function onAddItem() {
    return dispatch => {
        dispatch({
            type: Types.ADD_ITEM,
        });
    }
}

export function onDeleteItem(index) {
    return dispatch => {
        dispatch({
            type: Types.DELETE_ITEM,
            index,
        });
    }
}

export function getTodoList() {
    return dispatch => {
        dispatch({
            type: Types.GET_TODOLIST,
        });
    }
}
