# support-center

## Support-Center
使用Vue-CLI和Vue router搭建的支持中心。提供用户登陆和提交工单功能。
![priview](./readmePics/截屏2022-04-05%20下午8.10.19.png)

## 路由设计
```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/tickets',
    component: TicketsLayout,
    children: [
      {path: '', name: 'tickets', component: Tickets},
      {path: 'new', name: 'new-ticket', component: NewTicket},
      {path: ':id',name: 'ticket',component: Ticket, props:route => ({id: route.params.id})}
    ],
    meta: {
      private: true
    }
  },
  {
    path: '*',
    component: NotFound,
    name: 'notfound'
  }
]
```

## 组件关系
![relationship](./readmePics/截屏2022-04-05%20下午8.50.56.png)

## 