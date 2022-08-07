import { Layout } from 'antd';
import { useAppContext } from '../contexts/AppContext';

import AppHeader from './AppHeader';
import Form from './Form';

import Grid from './Grid';
import ConstraintEditor from './ConstraintEditor';
import Export from './Export';

const { Content, Sider } = Layout;

const App = () => {
  const { routes, route } = useAppContext();

  return (
    <Layout>
      <AppHeader />
      <Content>  
        <Layout>
          <Sider width={200}>
            <Form />
          </Sider>
          <Content>
            {route === routes.solve && <Grid />}
            {route === routes.constraints && <ConstraintEditor />}
            {route === routes.export && <Export />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
