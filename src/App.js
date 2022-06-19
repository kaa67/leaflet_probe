import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';

import { dataFetch } from './store';

import Menu from './components/menu';
import Dashboard from './components/dashboard';
import Informer from './components/informer';

const { Header, Footer, Content } = Layout;

const App = () => {
    const dispatch = useDispatch();

    useEffect(
      () => {
          dispatch(dataFetch());
      },
      [dispatch],
    );

    return (
        <>
            <Layout>
              <h1>Leaflet sample</h1>
              <Header>
                  <Menu />
              </Header>
              <Content>
                  <Dashboard />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
            <Informer />
        </>
    );
};

export default App;
