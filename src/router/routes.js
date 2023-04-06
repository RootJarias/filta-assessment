import meta from './meta';

const routes = [
  // Base Routes
  {
    path: '/',
    name: 'BaseRoute::index',
    component: () => import('../layouts/Base.vue'),
    redirect: {
      name: 'BaseRoute::assessment-1',
    },
    children: [
      {
        path: 'assessment-1',
        name: 'BaseRoute::assessment-1',
        component: () => import('../views/Assessment-1.vue'),
        meta: meta.home,
      },
      {
        path: 'assessment-2',
        name: 'BaseRoute::assessment-2',
        component: () => import('../views/Assessment-2.vue'),
        meta: meta.home,
      },
    ],
  },
];

export default routes;
