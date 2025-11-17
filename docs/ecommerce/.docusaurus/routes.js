import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '044'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cd1'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ec0'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'cf5'),
            routes: [
              {
                path: '/nodes/admin',
                component: ComponentCreator('/nodes/admin', '1d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/api-gateway',
                component: ComponentCreator('/nodes/api-gateway', '7ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/customer',
                component: ComponentCreator('/nodes/customer', 'e62'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/ecommerce-platform',
                component: ComponentCreator('/nodes/ecommerce-platform', '631'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/inventory-database',
                component: ComponentCreator('/nodes/inventory-database', '71f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/inventory-service',
                component: ComponentCreator('/nodes/inventory-service', '00e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/notification-service',
                component: ComponentCreator('/nodes/notification-service', '659'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/order-database',
                component: ComponentCreator('/nodes/order-database', '07b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/order-service',
                component: ComponentCreator('/nodes/order-service', '580'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/payment-database',
                component: ComponentCreator('/nodes/payment-database', '497'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/nodes/payment-service',
                component: ComponentCreator('/nodes/payment-service', '2ad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/admin-interacts-platform',
                component: ComponentCreator('/relationships/admin-interacts-platform', '9d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/customer-interacts-platform',
                component: ComponentCreator('/relationships/customer-interacts-platform', '8af'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/gateway-to-inventory-service',
                component: ComponentCreator('/relationships/gateway-to-inventory-service', '733'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/gateway-to-notification-service',
                component: ComponentCreator('/relationships/gateway-to-notification-service', '320'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/gateway-to-order-service',
                component: ComponentCreator('/relationships/gateway-to-order-service', '141'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/inventory-service-to-database',
                component: ComponentCreator('/relationships/inventory-service-to-database', '0e2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/order-service-to-database',
                component: ComponentCreator('/relationships/order-service-to-database', '769'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/order-service-to-notification',
                component: ComponentCreator('/relationships/order-service-to-notification', '34a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/order-service-to-payment-service',
                component: ComponentCreator('/relationships/order-service-to-payment-service', '05c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/payment-service-to-database',
                component: ComponentCreator('/relationships/payment-service-to-database', 'e20'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/relationships/platform-composition',
                component: ComponentCreator('/relationships/platform-composition', '875'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'bea'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
