import HomeContainer from 'containers/home-container/home-container';
import Page404 from 'components/404-page/404-page';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomeContainer
  },
  {
    path: '/404',
    exact: true,
    component: Page404
  }
];

export default routes;
