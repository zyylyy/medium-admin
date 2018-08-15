<template>
	<div class="displayControl">
        <div class="container">
            <div class="top_tit">
				<h3>展示位控制</h3>
				 <el-button type="primary" size="small">增加展示位</el-button>
			</div>
			<div class="bot_form">
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column align="center" prop="address" label="展示位名称" width="220"></el-table-column>
					<el-table-column align="center" prop="name" label="展示页面" width="230"></el-table-column>
					<el-table-column align="center" prop="city" label="状态" width="220"></el-table-column>
					<el-table-column align="center" prop="date" label="执行时间" width="250"></el-table-column>
					<el-table-column align="center" prop="dates" label="状态更新时间" width="230"></el-table-column>
					<el-table-column fixed="right" label="操作">
                  	<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
                  	</template>
                </el-table-column>
            </el-table> 
			</div>
        </div>
	</div>
</template>

<script  type="text/babel">

export default {
	name: 'displayControl',
	components: {

	},
	data() {
		return {
			dialogFormVisible: false,
			tableData: [{
                date: '2016-05-03-14:22:22',
                dates: '2016-05-03-2016-05-03',
                name: '一级页面/ 二级页面/ 三级页面',
                province: '上海',
                city: '配置中',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
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
	.displayControl {
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
