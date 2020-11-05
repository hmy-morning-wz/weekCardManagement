<template>
    <div class="activity-list">
        <div class="pl30 pt20">
            <div class="content">
                <el-row class="lh40 mt10">
                    <el-col :span="24">
                        <!-- <div class="float-left ml10">
                          <el-input v-model="searchParams.name" placeholder="活动名称"></el-input>
                        </div>
                        <div class="float-left ml10">
                          <el-input class="w100" v-model="searchParams.activityId" placeholder="活动ID"></el-input>
                        </div>
                        <div class="float-left ml10">
                          <el-date-picker
                            v-model="searchParams.startTime"
                            type="datetime"
                            :picker-options="beginPickerOptions"
                            placeholder="开始时间">
                          </el-date-picker>
                        </div>
                        <div class="float-left ml10">
                          <el-date-picker
                            v-model="searchParams.endTime"
                            type="datetime"
                            :picker-options="endPickerOptions"
                            placeholder="结束时间">
                          </el-date-picker>
                        </div>
                        <div class="float-left ml10">
                            <el-button type="primary" @click="handleSearch">搜索</el-button>
                        </div> -->
                          <div class="float-right ml20" style="margin-right: 30px">
                            <el-button type="primary" @click="handleGeneral">修改通用配置</el-button>
                            <el-button type="primary" @click="handleAdd">新增周期卡</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="table">
                <div class="tableList" style="width:100%">
                    <el-table :data="tableData">
                        <el-table-column prop="id" label="周期卡ID" min-width="35" align="center"></el-table-column>
                        <el-table-column prop="saleStartTime" label="售卖起止日期" min-width="50" align="center">
                            <template slot-scope="scope">
                                <div>{{scope.row.saleStartTime+'~'+scope.row.saleEndTime}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="mainMerchantName" label="主体商户" min-width="50" align="center">
                        </el-table-column>
                        <el-table-column prop="productName" label="周期卡卡名" min-width="50" align="center">
                        </el-table-column>
                        <el-table-column prop="payChannel" label="支持渠道" min-width="50" align="center">
                        </el-table-column>
                        <el-table-column prop="saleNote" label="支持虚拟卡" min-width="50" align="center">
                        </el-table-column>
                        <el-table-column prop="description" :formatter="formatStatus" label="上架状态" min-width="50" align="center">
                        </el-table-column>
                        <el-table-column label="操作" min-width="80">
                            <template slot-scope="scope" style="text-align:center">
                                <div style="display:flex">
                                    <el-button type="text" @click="handleDetail(scope.row.id)">查看</el-button>
                                    <el-button
                                      type="text"
                                      @click="handleEditor(scope.row.id)"
                                    >编辑</el-button>
                                    <el-button
                                      type="text"
                                      @click="handleUpdateStatus(scope.row.id,1)"
                                      v-if="scope.row.saleStatus===0"
                                    >上架</el-button>
                                    <el-button
                                      type="text"
                                      @click="handleUpdateStatus(scope.row.id,0)"
                                      v-if="scope.row.saleStatus==1"
                                    >下架</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="foot-page">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="searchParams.page"
                        :page-sizes="[10]"
                        :page-size="searchParams.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalSize"
                    ></el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import acService from "../../service/weekCardManagement/memberList.js";
import httpService from '../../service/weekCardManagement/weekCard.js'
import moment from '@/utils/moment'
import { Loading } from 'element-ui'

export default {
  data() {
    return {
      type: true,
      tableData: [],
      searchParams: {
        page: 1,
        pageSize: 10,
        activityId: '',
        endTime: '',
        name: '',
        startTime: ''
      },
      totalSize: 0
    }
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      const data = this.handparams()
      console.log(data)
      httpService.getWeekCardList(data).then(
        response => {
          if (response.data instanceof Array) {
            this.tableData = response.data
          } else {
            this.tableData = []
          }
          this.totalSize = response.totalSize || 0
        },
        response => {
          this.$message.error(response.msg)
        }
      )
    },
    formatStatus(row) {
      if (row.saleStatus == 0) {
        return '未上架'
      }
      if (row.saleStatus == 1) {
        return '已上架'
      }
    },
    // 确认
    handleSearch() {
      this.searchParams.page = 1
      this.getTableList()
    },
    // 新建活动
    handleAdd() {
      const router = `./addWeekCard`
      this.$router.push(router)      
    },
    handleGeneral() {
      const router = `./generalConfig`
      this.$router.push(router)   
    },
    updateStatus(data) {
      httpService.updateSaleProductStatus(data).then(
        response => {
          this.getTableList()
        },
        response => {
          this.$message.error(response.msg || '请求服务器连接失败!')
        }
      )
    },
    handleUpdateStatus(id, status) {
      let tipMessage = ''
      if (status === 0) {
        tipMessage = '是否确定要下架'
      } else {
        tipMessage = '是否确定要上架'
      }
      this.$confirm(tipMessage, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const data = {
            id: id,
            status: status
          }
          this.updateStatus(data)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    // 跳转到详情
    handleDetail(id) {
      const router = `./checkWeekCard?id=${id}`
      this.$router.push(router)
    },
    // 跳转到编辑
    handleEditor(id, state) {
      const router = `./editWeekCard?id=${id}`
      this.$router.push(router)
    },
    handleSizeChange(val) {
      this.searchParams.size = val
      this.getTableList()
    },
    handleCurrentChange(val) {
      this.searchParams.page = val
      this.getTableList()
    },
    handparams() {
      const self = this
      const params = JSON.parse(JSON.stringify(self.searchParams))
      for (const i in params) {
        if (params[i] === '') {
          delete params[i]
        }
      }
      if (params.startTime) {
        params.startTime = moment(params.startTime).formats()
      }
      if (params.endTime) {
        params.endTime = moment(params.endTime).formats()
      }
      return params
    }
  },
  computed: {
    beginPickerOptions() {
      let self = this
      return {
        disabledDate(time) {
          if (self.searchParams.endTime) {
            return time.getTime() > self.searchParams.endTime
          }
        }
      }
    },
    endPickerOptions() {
      let self = this
      return {
        disabledDate(time) {
          return time.getTime() < self.searchParams.startTime
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.w200 {
  width: 200px !important;
}
.bgcolor {
  color: #999 !important;
}
.activity-list {
  .table {
    margin: 20px 30px 10px 0;
    .foot-page {
      float: right;
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
  .detail-content {
    cursor: pointer;
    color: #20a0ff;
  }
  #demo-table-expand {
    font-size: 0;
  }
  .form-label {
    color: #99a9bf;
  }
  #demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 33%;
  }
}
</style>
