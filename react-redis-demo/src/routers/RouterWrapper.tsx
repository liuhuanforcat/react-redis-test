// src/routers/RouterWrapper.tsx
import { useRoutes } from 'react-router-dom';
import routes from './routers';

const RouterWrapper = () => {
  // 直接使用 useRoutes，不需要再包裹 BrowserRouter
  const routeElements = useRoutes(routes);
  return routeElements;
};

export default RouterWrapper;