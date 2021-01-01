/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../../actions/types";

const defaultState = {
    inputValue: '',
    list: []
}

const onAction = (state = defaultState, action) => {
    switch (action.type) {
        case Types.VALUE_CHANGE:
            return {
                ...state,
                inputValue: action.value,
            };
        case Types.ADD_ITEM: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        }
        case Types.DELETE_ITEM: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        }
        default:
            return state;
    }
}

export default onAction;
