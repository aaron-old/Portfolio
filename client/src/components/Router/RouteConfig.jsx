import React from 'react';
import {Route} from 'react-router-dom';


import Home from '../Page/Home/Home';
import Blog from '../Page/Blog/Blog';
import Resume from '../Page/Resume/Resume';

export const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'blog',
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    name: 'resume',
    path: '/resume',
    exact: true,
    component: Resume,
  },
];

export const router = () => (
    <div>
      {routes.map(route => (
          <Route
              key={`route-${route.name}`}
              path={route.path}
              exact={route.exact}
              component={route.component}
          />
      ))}
    </div>
);
