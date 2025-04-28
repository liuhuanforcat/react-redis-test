// src/routers/routers.ts
import { RouteObject } from 'react-router-dom';
import LayoutBase from '../layout';
import Home from '../pages/home';
import Login from '../pages/login';
import Redis from '../pages/redis';
import IndexDB from '../pages/indexDB';
import BigFile from '../pages/bigFile';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

export type CustomRouteObject = RouteObject & {
  meta?: {
    title?: string;
    icon?: React.ReactNode;
    hidden?: boolean;
    roles?: string[];
  };
  children?: CustomRouteObject[]; // 注意这里 children 也要用自己扩展后的 CustomRouteObject
};
const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: React.createElement(LayoutBase),
    meta: {
      title: '主页',
      icon: React.createElement(HomeOutlined),
      hidden: true,
    },
    children: [
      {
        path: 'home',
        element: React.createElement(Home),
        meta: {
          title: '首页',
        },
      },
      {
        path: 'redis',
        element: React.createElement(Redis),
        meta: {
          title: '模拟redis',
        },
      },
      {
        path: 'index-db',
        element: React.createElement(IndexDB),
        meta: {
          title: 'IndexDB',
        },
      },
      {
        path: 'big-file',
        element: React.createElement(BigFile),
        meta: {
          title: 'IndexDB',
        },
      },

      // 可以继续添加其他子路由
    ],
  },
  {
    path: '/login',
    element: React.createElement(Login),
    children: [],
    meta: {
      title: '登录',
      hidden: true,
    },
  }
];

export default routes;