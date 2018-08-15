<template>
	<div class="pricingRules">
        <div class="container">
            <div class="top_tit">
				<h3>红包定价规则</h3>
				 <el-button type="primary" size="small">增加定价</el-button>
			</div>
			<div class="bot_form">
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column align="center" prop="address" label="投放关系" width="100"></el-table-column>
					<el-table-column align="center" prop="name" label="红包类型" width="120"></el-table-column>
					<el-table-column align="center" prop="show" label="展示位" width="180"></el-table-column>
					<el-table-column align="center" prop="redprice" label="红包单价（元）" width="180"></el-table-column>
					<el-table-column align="center" prop="volumes" label="起投量（个）" width="180"></el-table-column>
					<el-table-column align="center" prop="perform" label="执行时间" width="180"></el-table-column>
					<el-table-column align="center" prop="type" label="状态" width="100"></el-table-column>
					<el-table-column align="center" prop="typeupdate" label="状态更新时间" width="180"></el-table-column>
					<el-table-column fixed="right" label="操作">
                  	<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button type="text" size="small">删除</el-button>
                  	</template>
                </el-table-column>
            </el-table> 
			</div>
        </div>
	</div>
</template>

<script  type="text/babel">

export default {
	name: 'pricingRules',
	components: {

	},
	data() {
		return {
			dialogFormVisible: false,
			tableData: [{
                date: '2016-05-03-14:22:22',
                dates: '2016-05-03-2016-05-03',
                name: '大众红包',
                province: '上海',
                city: '配置中',
                address: 'B2C',
                zip: 200333,
				redprice:'0.5',
				show:'首页banner展示',
				volumes:'10000',
				perform:'2016-09-21  08:50:08',
				type:'配置中',
				typeupdate:'2016-09-21  08:50:08'
            }],
            form: {

            },
		}
	},
	watch: {

	},
	methods: {

	},
	mounted() {
		
	},
}
</script>

<style lang="less" scoped>
	.pricingRules {
        .container {
			padding: 20px;
				.top_tit {
					display: flex;
					h3 {
						flex: 1px;
						color: #666666;
					}
					button {
						margin-top: 10px;
					}
				}
				.bot_form {
				margin-top:10px;
			}
        }
	}
</style>
