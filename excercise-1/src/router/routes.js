import meta from './meta';

const routes = [
  // Base Routes
  {
    path: '/',
    name: 'BaseRoute::index',
    component: () => import('../layouts/Base.vue'),
    redirect: {
      name: 'BaseRoute::home',
    },
    children: [
      {
        path: 'home',
        name: 'BaseRoute::home',
        component: () => import('../views/Home.vue'),
        meta: meta.home,
      },
    ],
  },
];

export default routes;
