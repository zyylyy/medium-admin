<template>
	<div class="priceRatio">
        <div class="container">
            <el-form :inline="true">
                <el-form-item>
                    <span style="font-size: 18px;">红包比例规则</span>
                </el-form-item>
            </el-form>

            <el-table :data="tableData" border style="width: 100%">
                <el-table-column align="center" prop="name" label="类型" width="150"></el-table-column>
                <el-table-column align="center" prop="province" label="属性" min-width="900">
					<template slot-scope="scope">
						<el-row style="margin-left:30px;">
						  <el-col :span="3"><div class="grid-content">{{ '10%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '20%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '30%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '40%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '50%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '20%' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '30%' }}</div></el-col>
						</el-row>
						<el-row style="margin-left:30px;">
						  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
						</el-row>
						<el-row style="text-align: left;">
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						  <el-col :span="3"><div class="grid-content">{{ '0.31元' }}</div></el-col>
						</el-row>
					</template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                  </template>
                </el-table-column>
            </el-table> 
        </div>
	</div>
</template>

<script  type="text/babel">

export default {
	name: 'priceRatio',
	components: {

	},
	data() {
		return {
            dialogFormVisible: false,
			tableData: [{
                date: '2016-05-03-2016-05-03',
                dates: '2016-05-03-2016-05-03',
                name: '大众红包',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            form: {
                value1: '',
            },

            isEdit: false,
		}
	},
	watch: {

	},
	methods: {
		handleClick(row) {
            console.log(row);
        },
        edit(){
            this.isEdit = true
            this.dialogFormVisible = true
        },
        add(){
            this.isEdit = false
            this.dialogFormVisible = true
        },
	},
	mounted() {
		
	},
}
</script>

<style lang="less" scoped>
	.priceRatio {
        .container {
            padding: 20px;
        }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 15px;
    position: relative;
    span {
    	font-size: 12px;
    	position: absolute;
    	top: 0;
    }
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }
	}
</style>
