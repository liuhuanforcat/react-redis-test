// RouterWrapper.tsx
import { useRoutes } from 'react-router-dom';
import { RouteConfig } from '../type/common';
import routes from './routers';
interface RouterWrapperProps {
  customRoutes?: RouteConfig[];
}

const RouterWrapper = ({ customRoutes }: RouterWrapperProps) => {
  const allRoutes = (customRoutes || routes) as any;
  const element = useRoutes(allRoutes);
  console.log('---', element);
  return element;
};

export default RouterWrapper;