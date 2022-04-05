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

## tips
1. `<router-link>`的`active-class`

    当路由被激活时Vue会自动添加`router-link-active`类。
因此可以编写相应的css代码添加路由激活时的样式。
但是active class的行为是包容的，意味着如果当前激活的路由是`/faq`,则`/`也会被加上该类。 如果我们不想要这🀄默认的效果，可以加上`exact`关键字。