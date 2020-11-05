<template>
  <div class="add-goods">
    <div class="pl20px pt30 pr20 mt10">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="180px"
        class="demo-ruleForm"
      >
        <div class="leftIcon">发行</div>
        <div class="faxing" style="display:flex">
          <div>
            <el-form-item label="主体商户" required prop="mainMerchantNo">
              <el-select v-model="ruleForm.mainMerchantNo" @change="handleMainMerchantChange" :disabled="type || (ruleForm.cityType === 1 ? false : true)" placeholder="请选择">
                <el-option
                  v-for="item in mainMerchantList"
                  :key="item.mainMerchantNo"
                  :label="item.mainMerchantName"
                  :value="item.mainMerchantNo">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结算商户" required prop="equityMerchantNo">
              <el-select v-model="ruleForm.equityMerchantNo" @change="handleEquityMerchantChange" :disabled="type || (ruleForm.cityType === 1 ? false : true)" placeholder="请选择">
                <el-option
                  v-for="item in equityMerchantList"
                  :key="item.equityMerchantNo"
                  :label="item.equityMerchantName"
                  :value="item.equityMerchantNo">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="周期卡命名" prop="productName">
              <el-input v-model="ruleForm.productName" maxlength="13" class="w350" :disabled="type"
              placeholder="周期卡名称"></el-input>
            </el-form-item>
            <el-form-item label="主色调值" prop="mainHueValue">
              <el-input v-model="ruleForm.mainHueValue" maxlength="13" class="w350" :disabled="type"
              placeholder="卡面主色调"></el-input>
            </el-form-item>
            <el-form-item label="支持渠道" required>
              <el-select value="支付宝" :disabled="type || (ruleForm.cityType === 1 ? false : true)" placeholder="支付宝">
              </el-select>
            </el-form-item>
            <el-form-item label="支持虚拟卡" required prop="saleNote">
              <el-select v-show="!ruleForm.mainMerchantNo" v-model="disableVal" :disabled="true" placeholder="请先选择主体商户"></el-select>
              <el-select v-show="ruleForm.mainMerchantNo" @change="handleVirtualCardChange" v-model="ruleForm.cardType" :disabled="type || (ruleForm.cityType === 1 ? false : true)" placeholder="请选择">
                <el-option
                  v-for="item in virtualCardList"
                  :key="item.cardType"
                  :label="item.cardName"
                  :value="item.cardType">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="" required prop="productCoverUrl">
            <div class="comm-dis">
              <div class="header-banner">
                <img v-if="ruleForm.productCoverUrl" :src="ruleForm.productCoverUrl" class="avatar">
                <span class="deletImg" v-if="!type">
                  <span class="deletImg2" @click="handleCoverDelete">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
              <div v-show="!ruleForm.productCoverUrl">
                <el-upload
                  class="avatar-uploader"
                  name="file"
                  :action="uploadimgUrl"
                  :show-file-list="false"
                  :on-success="handleCoverSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <div class="avatar-uploader-icon">添加卡面图片</div>
                </el-upload>
              </div>
            </div>
          </el-form-item>
        </div>

        <div class="leftIcon">售卖</div>
        <div class="shoumai">
          <div style="display:flex">
            <el-form-item label="售卖起止日期" required prop="saleStartTime">
              <el-date-picker
                v-model="dateRange"
                type="daterange"
                align="right"
                :clearable="false"
                disabled
                @change="handleDateChange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd 00:00:00"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
               
          </div>
          <div class="flex">
            <el-form-item label="可选生效时间精度" required prop="effectiveTimePrecision">
              <el-select v-model="ruleForm.effectiveTimePrecision" class="w150" disabled
              placeholder="请选择">
              <el-option
                  v-for="item in timeAccuracyList"
                  :key="item.id"
                  :label="item.value"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="可选生效时间范围" required prop="effectDay">
              <el-input-number v-model="ruleForm.effectDay" type="Number" :min="1" class="w150" disabled
              placeholder="天数"></el-input-number> 天
            </el-form-item>
          </div>
          <div class="flex">
            <el-form-item label="基础价格" prop="salePrice">
              <el-input v-model="ruleForm.salePrice" class="w150" disabled
              placeholder="基础价格"></el-input>
            </el-form-item>
            <el-form-item label="划线价格" prop="originalPrice">
              <el-input v-model="ruleForm.originalPrice" class="w150" disabled
              placeholder="划线价格"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="购买须知1">
            <el-input v-model="ruleForm.saleNoticeTitle" class="w240" :disabled="type"
            placeholder="协议名称"></el-input>
            <el-input v-model="ruleForm.saleNoticeUrl" class="w350" :disabled="type"
            placeholder="协议链接"></el-input>
          </el-form-item>
        </div>

        <div class="leftIcon">优惠</div>
        <div class="youhui">
          <div class="flex">
            <el-form-item label="折扣系数" prop="discount">
              <el-input v-model="ruleForm.discount" class="w120" disabled
              placeholder="折扣系数"></el-input>
            </el-form-item>
            <el-form-item label="单日笔数" required prop="singleDayNum">
              <el-input-number v-model="ruleForm.singleDayNum" type="Number" :min="0" class="w150" disabled
              placeholder="笔数"></el-input-number>
            </el-form-item>
            <el-form-item label="单笔封顶" prop="singleAmtLimit">
              <el-input v-model="ruleForm.singleAmtLimit" class="w120" disabled
              placeholder="封顶金额"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="有效天数" required prop="validDays">
            <el-input-number v-model="ruleForm.validDays" type="Number" :min="1" class="w150" disabled
              placeholder="天数"></el-input-number> 天
          </el-form-item>
        </div>

        <div class="leftIcon">宣传</div>
        <div class="xuanchuan">
          <el-form-item label="卡详情引导语" prop="cardDetailsGuide">
            <el-input v-model="ruleForm.cardDetailsGuide" class="w350" :disabled="type"
            placeholder="卡详情引导语"></el-input>
          </el-form-item>
          <el-form-item label="卡面显示规则" prop="saleRule">
            <el-input v-model="ruleForm.saleRule" class="w350" :disabled="type"
            placeholder="卡面显示规则"></el-input>
          </el-form-item>
          <el-form-item label="卡详情宣传点" prop="list">
            <div class="flex mb20" v-for="(item,index) in ruleForm.list" :key="index">
              <div class="pointLeft">
                <el-input v-model="item.title" class="w350" :disabled="type"
                placeholder="宣传标题"></el-input><br>
                <el-input v-model="item.content" class="w350" :disabled="type"
                placeholder="宣传内容"></el-input>
              </div>
              <div class="comm-dis">
                <div class="header-banner">
                  <img v-if="item.iconUrl" :src="item.iconUrl" class="avatar2">
                  <span class="deletImg" v-if="!type">
                    <span class="deletImg3" @click="handleCoverDelete2(index)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
                <div v-show="!item.iconUrl">
                  <el-upload
                    class="avatar-uploader2"
                    name="file"
                    :action="uploadimgUrl"
                    :show-file-list="false"
                    :on-success="((response, file, fileList)=>{handleCoverSuccess2(index,response, file, fileList)})"
                    :before-upload="beforeAvatarUpload2"
                  >
                    <div class="avatar-uploader-icon2">+</div>
                  </el-upload>
                </div>
              </div>
              <div class="delPoint" v-show="!type" @click="delPoint(index)"><i class="el-icon-delete"></i></div>
            </div>
            <div class="addXCPoint" @click="handleAddPoint">
              +
            </div>
          </el-form-item>
          <el-form-item label="订单确认提示" prop="orderConfirmation">
              <el-input
                  style="width:450px"
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 8}"
                  placeholder="请输入描述内容"
                  v-model="ruleForm.orderConfirmation"
                  :disabled="type"
              ></el-input>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button v-if="!type" type="primary" @click="submitForm('ruleForm')">修改</el-button>
          <el-button type="primary" @click="backList">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import httpService from '../../service/weekCardManagement/weekCard.js'
import apiHost from '@/hostconfig/index'
import moment from '@/utils/moment'
import headTop from '../../components/headTop'
// import UE from '../../components/ue/ue.vue'

export default {
  data() {
    return {
      loadingShow: false,
      ue1: 'ue1', // 不同编辑器必须不同的id
      type: false,
      disableVal: '',
      dateRange: [],
      pickerOptions: {
        shortcuts: [
          {
            text: '下一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      timeAccuracyList: [],
      mainMerchantList: [],
      equityMerchantList: [],
      virtualCardList: [],
      ruleForm: {
        list: [],
        cardDetailsGuide: '',
        discount: '',
        effectDay: '',
        equityMerchantNo: '',
        equityMerchantName: '',
        merchantKey: '',
        mainMerchantNo: '',
        mainMerchantName: '',
        orderConfirmation: '',
        originalPrice: '',
        productName: '',
        mainHueValue: '',
        saleNoticeUrl: '',
        productCoverUrl: '',
        saleNoticeTitle: '',
        salePrice: '',
        saleRule: '',
        saleStartTime: '',
        saleEndTime: '',
        singleAmtLimit: '',
        singleDayNum: '',
        validDays: '',
        saleNote: '',
        appletAppId: '',
        cardType: '',
        cityName: ''
      },
      uploadimgUrl: `${apiHost.netImg}prefer/api/fileUploadOne`,
      rules: {
        cardDetailsGuide: [
          { required: true, message: '请输入引导语', trigger: 'change' }
        ],
        equityMerchantNo: [
          { required: true, message: '请选择结算商户', trigger: 'change' }
        ],
        effectiveTimePrecision: [
          { required: true, message: '请选择时间精度', trigger: 'change' }
        ],
        mainMerchantNo: [
          { required: true, message: '请选择主体商户', trigger: 'change' }
        ],
        saleNote: [
          { required: true, message: '请选择支持的虚拟卡', trigger: 'change' }
        ],
        productName: [
          { required: true, message: '请输入周期卡名称', trigger: 'change' }
        ],
        mainHueValue: [
          { required: true, message: '请设置主色调值', trigger: 'change' }
        ],
        salePrice: [
          { required: true, message: '请输入基础价格', trigger: 'change' }
        ],
        originalPrice: [
          { required: true, message: '请输入原始价格', trigger: 'change' }
        ],
        orderConfirmation: [
          { required: true, message: '请输入订单确认提示', trigger: 'change' }
        ],
        saleStartTime: [
          { required: true, message: '请选择起止日期', trigger: 'change' }
        ],
        singleAmtLimit: [
          { required: true, message: '请输入单笔封顶金额', trigger: 'change' }
        ],
        saleRule: [
          { required: true, message: '请输入规则', trigger: 'change' }
        ],
        discount: [
          { required: true, message: '请输入折扣系数', trigger: 'change' },
          {
            validator(rule, value, callback) {
              var reg = /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/
              if (reg.test(value)) {
                callback()
              } else {
                callback(new Error('0-1之间,最多两位小数'))
              }
            },
            trigger: 'change'
          }
        ],
        productCoverUrl: [
          { required: true, message: '请上传封面图片', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.getMainMerchantList()
    this.getEquityMerchantList()
    if (this.$route.name == 'checkWeekCard') {
      this.type = true
    }
    this.getCardDetail()
  },
  mounted() {
    this.$nextTick(() => {})
  },
  updated() {},
  components: {
    // UE
  },
  methods: {
    getCardDetail() {
      httpService.getCardDetail(this.$route.query.id).then(
        response => {
          console.log(response)
          if (response.data) {
            this.ruleForm = response.data || {}
            this.dateRange = [
              response.data.saleStartTime,
              response.data.saleEndTime
            ]
            this.ruleForm.salePrice = response.data.salePriceStr
            this.ruleForm.originalPrice = response.data.originalPriceStr
            if (this.ruleForm.cityCode) {
              this.getSaleNote()
            }
            this.getEffectiveTimePrecisionList()
          }
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },
    handleAddPoint() {
      let obj = {
        content: '',
        title: '',
        iconUrl: ''
      }
      this.ruleForm.list.push(obj)
      console.log(this.ruleForm.list)
    },
    delPoint(index) {
      this.ruleForm.list.splice(index, 1)
      console.log(this.ruleForm.list)
    },
    handleDateChange() {
      this.ruleForm.saleEndTime = this.dateRange[1] || ''
      this.ruleForm.saleStartTime = this.dateRange[0] || ''
    },
    handleMainMerchantChange(val) {
      console.log(val, this.ruleForm.mainMerchantNo)
      this.mainMerchantList.forEach((item, index) => {
        if (item.mainMerchantNo === val) {
          console.log(item)
          this.ruleForm.mainMerchantName = item.mainMerchantName
          this.ruleForm.cityCode = item.cityCode
        }
      })
      this.ruleForm.cardType = ''
      this.ruleForm.saleNote = ''
      this.ruleForm.appletAppId = ''
      this.ruleForm.cityName = ''
      this.virtualCardList = []
      if (this.ruleForm.cityCode) {
        this.getSaleNote()
      }
    },
    handleEquityMerchantChange(val) {
      this.equityMerchantList.forEach((item, index) => {
        if (item.equityMerchantNo === val) {
          this.ruleForm.equityMerchantName = item.equityMerchantName
          this.ruleForm.merchantKey = item.merchantKey
        }
      })
    },
    handleVirtualCardChange(val) {
      this.virtualCardList.forEach((item, index) => {
        if (item.cardType === val) {
          this.ruleForm.saleNote = item.cardName
          this.ruleForm.appletAppId = item.miniAppId
          this.ruleForm.cityName = item.cityName
        }
      })
    },

  getEffectiveTimePrecisionList () {
      httpService.getEffectiveTimePrecisionList().then(
        response => {
          console.log(response)
          this.timeAccuracyList = response.data || []
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },

    getMainMerchantList() {
      httpService.getMainMerchantList().then(
        response => {
          console.log(response)
          this.mainMerchantList = response.data || []
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },
    getEquityMerchantList() {
      httpService.getEquityMerchantList().then(
        response => {
          console.log(response)
          this.equityMerchantList = response.data || []
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },
    getSaleNote() {
      this.virtualCardList = []
      httpService.getSaleNote(this.ruleForm.cityCode).then(
        response => {
          console.log(response)
          this.virtualCardList = response.data || []
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },
    checkListValid() {
      let flag = true
      this.ruleForm.list.forEach((item, index) => {
        if (item.content && item.iconUrl && item.title) {
        } else {
          flag = false
        }
      })
      return flag
    },
    showConfirm(str) {
      this.$confirm(`${str}`, '', {
        confirmButtonText: '确定',
        type: 'error',
        center: true
      })
    },
    addWeekCard() {
      httpService.updateSaleProductCfg(this.ruleForm).then(
        response => {
          console.log(response)
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
          this.$router.go(-1)
        },
        response => {
          this.$message.error(
            response.sub_msg || response.msg || '请求服务器连接失败!'
          )
        }
      )
    },
    backList() {
      this.$router.go(-1)
    },
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.list.length > 5 || this.ruleForm.list.length < 3) {
            this.showConfirm('宣传点限制3-5个')
          } else {
            let valid = this.checkListValid()
            if (valid) {
              this.addWeekCard()
            } else {
              this.showConfirm('宣传点内容不可空')
            }
          }
        } else {
          this.showConfirm('表单验证错误')
          return false
        }
      })
    },
    handleAvatarSuccess(res, file) {
      const url = `https://sit-img-citytsm.oss-cn-hangzhou.aliyuncs.com/${
        res.data
      }`
      this.ruleForm.smallImages.push(url)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleCoverSuccess(res, file) {
      this.ruleForm.productCoverUrl = `https://${res.data}`
    },
    handleCoverDelete() {
      this.ruleForm.productCoverUrl = ''
    },
    beforeAvatarUpload2(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleCoverSuccess2(index, res, file) {
      console.log(res, index)
      this.ruleForm.list[index].iconUrl = `https://${res.data}`
    },
    handleCoverDelete2(index) {
      this.ruleForm.list[index].iconUrl = ''
    }
  },
  computed: {},
  watch: {
    loadingShow(val) {
      return val
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-uploader-icon {
  font-size: 24px;
  color: #8c939d;
  width: 296px;
  height: 166px;
  line-height: 166px;
  text-align: center;
}
.avatar-uploader-icon2 {
  font-size: 24px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 296px;
  height: 166px;
  display: block;
  margin: 10px 10px 0 0;
}
.avatar2 {
  width: 80px;
  height: 80px;
  display: block;
  // margin: 10px 10px 0 0;
}
.header-banner {
  position: relative;
}
.deletImg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.deletImg:hover {
  opacity: 1;
}
.deletImg2 {
  position: absolute;
  top: 43%;
  left: 46%;
}
.deletImg3 {
  position: absolute;
  top: 40%;
  left: 40%;
}
.leftIcon {
  position: relative;
  left: 10px;
  top: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #8c939d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
}
.bgcolor {
  color: #999 !important;
}
#editor {
  width: 800px;
}
.comm-dis {
  display: flex;
}
.add-goods {
  padding: 0 30px;
}
.redFlag {
  position: relative;
  left: 112px;
  top: 5px;
  color: #f56c6c;
  margin-right: 4px;
}
.addXCPoint {
  width: 60px;
  height: 60px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #606266;
}
.delPoint {
  width: 60px;
  height: 80px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #606266;
}
</style>
