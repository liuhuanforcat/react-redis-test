// RouterWrapper.tsx
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { RouteConfig } from './types';

interface RouterWrapperProps {
  customRoutes?: RouteConfig[];
}

const RouterWrapper = ({ customRoutes }: RouterWrapperProps) => {
  const allRoutes = customRoutes || routes;
  const element = useRoutes(allRoutes);

  return element;
};

export default RouterWrapper;