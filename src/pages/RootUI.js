/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */
import React from "react";
import {Button, Input, List} from "antd";
import 'antd/dist/antd.css';

// 无状态组件(普通函数)
// 性能优于普通组件
const RootUI = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <div>
                <Input placeholder={'input something'}
                       style={{width: '250px', marginRight: '10px'}}
                       onChange={props.onChange} // bind
                       value={props.inputValue}
                />
                <Button type={'primary'}
                        onClick={props.onAddClick}
                >
                    增加
                </Button>
            </div>
            <div style={{margin: 10, width: 300}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item
                        onClick={() => props.onDeleteClick(index)}
                    >
                        {item}</List.Item>}
                >
                </List>
            </div>
        </div>
    )
}

export default RootUI;

// UI组件与业务逻辑分离
// export default class RootUI extends PureComponent {
//     render() {
//         return (
//             <div style={{margin: '10px'}}>
//                 <div>
//                     <Input placeholder={'input something'}
//                            style={{width: '250px', marginRight: '10px'}}
//                            onChange={this.props.onChange} // bind
//                            value={this.props.inputValue}
//                     />
//                     <Button type={'primary'}
//                             onClick={this.props.onAddClick}
//                     >
//                         增加
//                     </Button>
//                 </div>
//                 <div style={{margin: 10, width: 300}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => <List.Item
//                             onClick={() => this.props.onDeleteClick(index)}
//                         >
//                             {item}</List.Item>}
//                     >
//                     </List>
//                 </div>
//             </div>
//         )
//     }
// }
