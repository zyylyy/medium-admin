const layout = resolve => require(['views/layout/index.vue'], resolve)
const home = resolve => require(['views/home.vue'], resolve)

import demo from './map/demo'
import controlCenter from './map/controlCenter'

export default [
    { 
		path: '/',
		redirect: '/home',
		component: layout,
    },
	{
		path: '/layout',
		name: 'layout',
		component: layout,
		meta: {
			title: 'layout'
		},
		children: [
		    {
				path: '/home',
				component: home,
		    },
		    ...demo,
		    ...controlCenter
		],
	}
]