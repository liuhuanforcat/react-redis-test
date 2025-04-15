
import LayoutBase from '../layout'; // Ensure LayoutBase is a default export and a valid React component
import { RouteConfig } from '../type/common';
const routers: RouteConfig[] = [

  {
    path: '/',
    element: LayoutBase,
  }
]
export default routers;