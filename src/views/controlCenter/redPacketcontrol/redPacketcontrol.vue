<template>
	<div class="redPacketcontrol">
        <div class="container">
            <div class="top_tit">
				<h3>红包配置</h3>
				 <el-button @click="add()" type="primary" size="small">增加配置</el-button>
			</div>
            <div class="bot_form">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column align="center" prop="address" label="投放关系" width="220"></el-table-column>
                    <el-table-column align="center" prop="name" label="红包类型" width="150"></el-table-column>
                    <el-table-column align="center" prop="province" label="广告对象" min-width="150"></el-table-column>
                    <el-table-column align="center" prop="city" label="状态" min-width="220"></el-table-column>
                    <el-table-column align="center" prop="date" label="执行时间" min-width="220"></el-table-column>
                    <el-table-column align="center" prop="dates" label="状态更新时间" min-width="180"></el-table-column>
                    <el-table-column align="center" fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                    </template>
                    </el-table-column>
                </el-table> 
            </div>

            <el-dialog :title="isEdit ? '编辑红包配置' : '增加红包配置'" :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="红包关系">
                        <el-select v-model="form.region" size="small" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="类型名称">
                        <el-select v-model="form.region" size="small" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="广告对象：">
                        <el-checkbox-group v-model="form.type" size="small">
                            <el-checkbox label="实物图文" name="type"></el-checkbox>
                            <el-checkbox label="APP图文" name="type"></el-checkbox>
                            <el-checkbox label="售卖商品" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="红包简介">
                        <el-input type="textarea" v-model="form.desc" size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="红包状态">
                        <el-radio-group v-model="form.resource" size="small">
                            <el-radio label="开启"></el-radio>
                            <el-radio label="关闭"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="执行时间">
                        <el-date-picker
                          size="small"
                          v-model="value1"
                          type="datetime"
                          placeholder="选择执行时间">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false" size="small">确 定</el-button>
                </div>
            </el-dialog>            
        </div>
	</div>
</template>

<script  type="text/babel">
export default {
  name: "redPacketcontrol",
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          date: "2016-05-03-2016-05-03",
          dates: "2016-05-03-2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      form: {
        value1: ""
      },

      isEdit: false
    };
  },
  watch: {},
  methods: {
    handleClick(row) {
      console.log(row);
    },
    edit() {
      this.isEdit = true;
      this.dialogFormVisible = true;
    },
    add() {
      this.isEdit = false;
      this.dialogFormVisible = true;
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.redPacketcontrol {
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
      margin-top: 10px;
    }
  }
}
</style>
