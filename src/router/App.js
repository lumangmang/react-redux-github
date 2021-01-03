/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import React from 'react';
import {NavLink, Route} from 'react-router-dom';

import About from './about';
import Home from './home';

// 无状态组件
export default function App() {
    return (
        <div>
            <div className={'row'}>
                <div className={'col-xs-offset-2 col-xs-8'}>
                    <div className={'page-header'}><h2>React-Router</h2></div>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-xs-2 col-xs-offset-2'}>
                    <div className={'list-group'}>
                        {/* 路由链接实现组件切换 */}
                        <NavLink className={'list-group-item'} to={'/about'}>About</NavLink>
                        <NavLink className={'list-group-item'} to={'/home'}>Home</NavLink>
                    </div>
                </div>
                <div className={'col-xs-6'}>
                    <div className={'panel'}>
                        <div className={'panel-body'}>
                            {/* 注册路由 */}
                            <Route path={'/about'} component={About}/>
                            <Route path={'/home'} component={Home}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
