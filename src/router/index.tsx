import * as React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

import HeadNav from '../components/HeadNav';
import '../index.css';


class App extends React.Component<any, any> {
    public render() {
        return (
                <Layout>
                   <HeadNav />
                    <Layout>
                        <Layout style={{ padding: '0 0' }}>
                            <Content style={{ padding: 0, margin: 0, minHeight: 280 }}>
                                    { this.props.children }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
        );
    }
}

export default App;