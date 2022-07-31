import { Layout } from 'antd';
import Grid2 from './Grid2';
import TileModal from './TileModal';
import { useAppContext } from './AppContext';
import AppHeader from './AppHeader';
import Form from './Form';

const { Content, Sider } = Layout;

const App = () => {
  const { routes,route } = useAppContext();
  
  // React.useEffect(() => {
  //   if (continual) {
  //     const t = setInterval(() => {
  //       collapseRandomHighEntropyCell();
  //     }, 100);
  //     return () => clearInterval(t);
  //   }
  // }, [continual, collapseRandomHighEntropyCell]);

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
            {route === routes.constraints && <TileModal />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
