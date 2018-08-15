<template>
	<div class="rePacketcontrolType">
        <div class="container">
            <el-form :inline="true">
                <el-form-item label="红包类型：">
                    <el-select v-model="form.region" size="small" placeholder="请选择红包类型">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="float:right;">
                    <el-button size="small" type="warning" @click="deteleList">批量删除</el-button>
                </el-form-item>
                <el-form-item style="float:right;">
                    <el-button size="small" type="primary" @click="dialogFormVisible = true" icon="el-icon-plus">新增</el-button>
                </el-form-item> 
                <el-form-item style="float:right;">
                    <el-input size="small" placeholder="请输入内容" v-model="input5" class="input-with-select">
					    <el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
                </el-form-item>               
            </el-form>

            <el-table :data="tableData" border tooltip-effect="dark"
			  style="width: 100%"
			  @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" label="选择"></el-table-column>
                <el-table-column align="center" prop="name" label="属性名称" width="150"></el-table-column>
                <el-table-column align="center" prop="province" label="字段类型" width="150"></el-table-column>
                <el-table-column align="center" prop="city" label="限制条件" width="300"></el-table-column>
                <el-table-column align="center" prop="date" label="字段说明" width="220"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                  </template>
                </el-table-column>
            </el-table> 


            <el-dialog :title="isEdit ? '编辑红包配置' : '增加红包配置'" :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form" label-width="100px" label-position="left">
                    <el-form-item label="字段名称">
                    	<el-input size="small" placeholder="请输入内容" v-model="input5">
					    </el-input>
                    </el-form-item>
                    <el-form-item label="字段类型">
                        <el-select v-model="form.region" size="small" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请选择功能">
                        <el-select v-model="form.region" size="small" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="字段说明">
                    	<el-input type="textarea" v-model="form.desc"  size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="子字段：">
                    	<el-button size="mini" type="warning" @click="batchAdd = true">批量添加</el-button>
                    </el-form-item>

                    <el-table :data="tableData1" style="width: 100%">
				        <el-table-column prop="name" label="字段名" width="180"></el-table-column>
				        <el-table-column prop="type" label="字段类型"  width="180">
							<template slot-scope="scope">
		                        <el-select v-model="scope.row.type" size="small" placeholder="请选择字段类型">
		                            <el-option label="广告" value="0"></el-option>
		                            <el-option label="广告" value="1"></el-option>
		                        </el-select>
							</template>
				        </el-table-column>
				        <el-table-column prop="typeG" label="功能权限">
							<template slot-scope="scope">
		                        <el-select v-model="scope.row.typeG" size="small" placeholder="请选择功能权限">
		                            <el-option label="区域一" value="0"></el-option>
		                            <el-option label="区域二" value="1"></el-option>
	                            </el-select>
							</template>
				        </el-table-column>
				        <el-table-column label="操作">
							<template slot-scope="scope">
								<el-button
								  size="mini"
								  type="danger"
								  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
				        </el-table-column>
				    </el-table>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false" size="small">确 定</el-button>
                </div>
            </el-dialog>  

			<el-dialog title="批量添加" :visible.sync="batchAdd">
			  <el-form :model="form">
			    <el-form-item>
			        <el-input type="textarea" size="small" v-model="form.desc" placeholder="请输入字段名，并以Enter键隔开"></el-input>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button size="small" @click="batchAdd = false">取 消</el-button>
			    <el-button size="small" type="primary" @click="batchAdd = false">确 定</el-button>
			  </div>
			</el-dialog>          
        </div>
	</div>
</template>

<script  type="text/babel">

export default {
	name: 'rePacketcontrolType',
	components: {

	},
	data() {
		return {
			batchAdd: false,
            dialogFormVisible: false,
			tableData: [{
                date: '2016-05-03-2016-05-03',
                dates: '2016-05-03-2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            tableData1: [{
            	name: 'xxxx',
            	type: '0',
            	typeG: '1',
            }],
            form: {
                value1: '',
                desc: '',
            },

            isEdit: false,

            selectlist: [],
		}
	},
	watch: {

	},
	methods: {
		deteleList(){
			if(!this.selectlist.length) {
				this.$message('请先选择要删除的数据');

			}else {
		        this.$alert('确定要删除选中的数据吗？', '批量删除', {
		          confirmButtonText: '确定',
		          callback: action => {
		          	this.$message.success('删除成功');
		          }
		        });
			}
		},
		handleDelete(index, item){
			this.tableData1.splice(index, 1)
		},
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
        handleSelectionChange(arr){
        	this.selectlist = arr
        },
	},
	mounted() {
		
	},
}
</script>

<style lang="less" scoped>
	.rePacketcontrolType {
        .container {
            padding: 20px;
        }
	}
</style>
