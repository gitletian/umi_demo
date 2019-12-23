import React, { Component } from 'react';
import { connect } from 'react-redux';

import Link from 'umi/link';
import { Button, Table } from 'antd';

import './home.scss';
import { getlist_get, getlist_post } from '@/actions';

/**
 * scss 导入 有两种 方法
 * 方法一：
 *      import homeStyle from './home.scss';
 *      使用方法：
 *          className={homeStyle.home_container}
 *          className={homeStyle.red}
 *       注意： 此方法 的样式名称中 不能有 "-"， 因为 "-" 在 js 中是特殊字符，不能用于变量名。
 *
 *  方法二：
 *      import './home.scss';
 *      使用方法：
 *          className="home_container"
 *          className="red"
 *
 */

class Home extends Component {
    componentDidMount() {
        this.props.onGetList({'key': 12});
    }

    onButtonClick = () => {
        // 按照 key 值进行解构
        const { onToggerDesc, isShowDesc } = this.props;
        onToggerDesc(!isShowDesc);
    };

    render() {
        // 按照 key 值进行解构
        const { isShowDesc, listData } = this.props;

        const columns = [{
            title: '姓名',
            dataIndex: 'name'
        }, {
            title: '城市',
            dataIndex: 'city'
        }, {
            title: '性别',
            dataIndex: 'sex',
            render: (text, record) => (text === 0 ? '女' : '男')
        }, {
            title: '邮箱',
            dataIndex: 'email'
        }];

        return (
            <div className="home-container">
                <p className="red">Home 页面</p>
                <Link to="/center">个人中心</Link>

                <Button onClick={this.onButtonClick}>显示/隐藏</Button>
                { isShowDesc ? <p>这里是详情信息</p> : '' }

                <Table dataSource={listData} columns={columns} rowKey="name" />

            </div>
        );
    }
}

// mapStateToProps 方法传的state是全局的store，我们只需要homeStore，返回homeStore，
// 将 state 加入到 props 中， 可以通过 const { onToggerDesc, isShowDesc } = this.props; 解构
const mapStateToProps = state => {
    console.log('stage:', state);
    return state.homeStore;
};

// mapDispatchToProps 处理的分发函数， 将 分发器添加到 props 中， 可以通过 const { onToggerDesc, isShowDesc } = this.props; 解构
const mapDispatchToProps = dispatch => ({
    onToggerDesc: (value) => {
        dispatch({
            type: 'home-show-desc',
            value
        })
    },
    onGetList: (params) => {
        const data = getlist_post({ dispatch, params});
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
