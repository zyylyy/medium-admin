const redPacketcontrol = resolve => require(['views/controlCenter/redPacketcontrol/redPacketcontrol.vue'], resolve)
const rePacketcontrolType = resolve => require(['views/controlCenter/redPacketcontrol/rePacketcontrolType.vue'], resolve)
const advertisingObject = resolve => require(['views/controlCenter/redPacketcontrol/advertisingObject.vue'], resolve)
const displayControl = resolve => require(['views/controlCenter/redPacketcontrol/displayControl.vue'], resolve)
const pricingRules = resolve => require(['views/controlCenter/redPacketcontrol/pricingRules.vue'], resolve)
const priceRatio = resolve => require(['views/controlCenter/redPacketcontrol/priceRatio.vue'], resolve)


export default [
	{
		path: '/redPacketcontrol',
		name: 'redPacketcontrol',
		component: redPacketcontrol,
		meta: {
			title: '红包控制'
		}
	},{
		path: '/rePacketcontrolType',
		name: 'rePacketcontrolType',
		component: rePacketcontrolType,
		meta: {
			title: '红包类型'
		}
	},{
		path: '/advertisingObject',
		name: 'advertisingObject',
		component: advertisingObject,
		meta: {
			title: '广告对象'
		}		
	},{
		path: '/displayControl',
		name: 'displayControl',
		component: displayControl,
		meta: {
			title: '展示位控制'
		}			
	},{
		path: '/pricingRules',
		name: 'pricingRules',
		component: pricingRules,
		meta: {
			title: '红包定价规则'
		}			
	},{
		path: '/priceRatio',
		name: 'priceRatio',
		component: priceRatio,
		meta: {
			title: '红包定价比例'
		}		
	}
]