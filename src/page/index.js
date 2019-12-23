import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from '../reducers';

import { Layout } from 'antd';
import '../assets/css/style.scss';

const store = createStore(appStore);
const { Header, Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // 这样我们可以在所有的页面都使用store内容
        <Provider store={store}>
            <div className="app-container">
                <Header>header</Header>
                <Content>{this.props.children}</Content>
                <Footer>footer</Footer>
            </div>
        </Provider>
        );
    }
}

export default App;
