// src/routers/routers.ts
import { RouteObject } from 'react-router-dom';
import LayoutBase from '../layout';
import Home from '../pages/home';
import Login from '../pages/login';
import React from 'react';

const routes: RouteObject[] = [
  {
    path: '/redis',
    element: React.createElement(LayoutBase),
    children: [
      {
        path: 'index',
        element: React.createElement(Home),
      },
      // 可以继续添加其他子路由
    ],
  },
  {
    path: '/',
    element: React.createElement(Login),
    children: [],
  }
];

export default routes;