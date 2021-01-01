/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

export const ValueChange = 'ValueChange';
export const AddItem = 'AddItem';

export function onValueChange(value) {

    return dispatch => {
        dispatch({
            type: ValueChange,
            value,
        })
    }
}

export function onAddItem() {
    return dispatch => {
        dispatch({
            type: AddItem,
        })
    }
}
