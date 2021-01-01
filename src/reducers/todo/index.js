/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import {ValueChange, AddItem} from "../../actions/todo";

const defaultState = {
    inputValue: '',
    list: [
        '开早会',
        '需求沟通会',
    ]
}

const onAction = (state = defaultState, action) => {
    switch (action.type) {
        case ValueChange:
            return {
                ...state,
                inputValue: action.value,
            };
        case AddItem:
            const {list, inputValue} = state;
            return {
                ...state,
                list: list.concat(inputValue),
                inputValue: '',
            };
        default:
            return state;
    }
}

export default onAction;
