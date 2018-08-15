const redPacketcontrol = resolve => require(['views/controlCenter/redPacketcontrol/redPacketcontrol.vue'], resolve)

export default [
	{
		path: '/redPacketcontrol',
		name: 'redPacketcontrol',
		component: redPacketcontrol,
		meta: {
			title: '红包控制'
		}
	}
]