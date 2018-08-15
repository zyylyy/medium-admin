<template>
	<div class="redPacketcontrol">
        <div class="container">
            <el-form :inline="true">
                <el-form-item>
                    <span>红包配置</span>
                </el-form-item>
                <el-form-item style="float:right;">
                    <el-button size="small">新增</el-button>
                </el-form-item>
            </el-form>

            <el-table :data="tableData" border style="width: 100%">
                <el-table-column align="center" prop="address" label="投放关系" width="220"></el-table-column>
                <el-table-column align="center" prop="name" label="红包类型" width="150"></el-table-column>
                <el-table-column align="center" prop="province" label="广告对象" width="150"></el-table-column>
                <el-table-column align="center" prop="city" label="状态" width="220"></el-table-column>
                <el-table-column align="center" prop="date" label="执行时间" width="220"></el-table-column>
                <el-table-column align="center" prop="dates" label="状态更新时间" width="180"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
            </el-table>             
        </div>
	</div>
</template>

<script  type="text/babel">

export default {
	name: 'redPacketcontrol',
	components: {

	},
	data() {
		return {
			tableData: [{
                date: '2016-05-03-2016-05-03',
                dates: '2016-05-03-2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
		}
	},
	watch: {

	},
	methods: {
		handleClick(row) {
            console.log(row);
        }
	},
	mounted() {
		
	},
}
</script>

<style lang="less" scoped>
	.redPacketcontrol {
        .container {
            padding: 20px;
        }
	}
</style>
