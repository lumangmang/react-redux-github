/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {onValueChange, onAddItem, onDeleteItem, getTodoList} from "../actions/todo";
import RootUI from "./RootUI";

class Root extends PureComponent {

    static propTypes = {
        inputValue: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired,
        onValueChange: PropTypes.func.isRequired,
        onAddItem: PropTypes.func.isRequired,
        onDeleteItem: PropTypes.func.isRequired,
        getTodoList: PropTypes.func.isRequired,
    }

    // 必须是箭头函数才能拿到this;
    onChange = e => {
        this.props.onValueChange(e.target.value);
    }

    onAddClick = e => {
        this.props.onAddItem();
    }

    onDeleteClick(index) {
        this.props.onDeleteItem(index);
    }

    componentDidMount() {
        this.props.getTodoList()
    }

    // 普通函数拿不到this
    // 如果需要在这个函数中使用this
    // 1.类似上面使用箭头函数
    // 2.在构造函数中bind(this)
    // 推荐使用2，因为每次render中绑定都会消耗性能
    // onChange(e) {
    //     console.log(this);  // undefined
    //     console.log(e.target.value);
    // }

    // React中，如果你使用es6的语法构建组件，
    // 那么在你组件里写的函数在构造器里都需要手动绑定this，
    // 如果使用es5的React.createClass()创建组件，this反而会自动绑定为当前组建实例
    render() {
        return (
            <RootUI
                inputValue={this.props.inputValue}
                onChange={this.onChange}
                onAddClick={this.onAddClick}
                list={this.props.list}
                onDeleteClick={(index) => this.onDeleteClick(index)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    // 连续解构
    const {todo: {list, inputValue}} = state;
    return {
        list,
        inputValue,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (value) => dispatch(onValueChange(value)),
    onAddItem: () => dispatch(onAddItem()),
    onDeleteItem: (index) => dispatch(onDeleteItem(index)),
    getTodoList: () => dispatch(getTodoList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);
