import { Layout } from 'antd';
import { useAppContext } from '../contexts/AppContext';

import AppHeader from './AppHeader';
import Form from './Form';
import Grid2 from './Grid';
import ConstraintEditor from './ConstraintEditor';

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
            {route === routes.solve && <Grid2 />}
            {route === routes.constraints && <ConstraintEditor />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
