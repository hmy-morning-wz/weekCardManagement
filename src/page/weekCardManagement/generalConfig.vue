<template>
  <div style="padding:100px 80px;">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="宣传标语" prop="propagandaSlogan">
        <el-input v-model="ruleForm.propagandaSlogan" class="w240" placeholder="宣传标语"></el-input>
      </el-form-item>
      <el-form-item label="使用说明">
        <el-input v-model="ruleForm.useNoticeTitle" class="w240" :disabled="type"
        placeholder="协议名称"></el-input>
        <el-input v-model="ruleForm.useNoticeUrl" class="w420" :disabled="type"
        placeholder="协议链接"></el-input>
      </el-form-item>
      <el-form-item label="购买须知2">
        <el-input v-model="ruleForm.saleNoticeTitle" class="w240" :disabled="type"
        placeholder="协议名称"></el-input>
        <el-input v-model="ruleForm.saleNoticeUrl" class="w420" :disabled="type"
        placeholder="协议链接"></el-input>
      </el-form-item>
      <el-form-item label="售前脚注" prop="perSaleFootnote">
        <el-input v-model="ruleForm.perSaleFootnote" class="w350" placeholder="售前脚注"></el-input>
      </el-form-item>
      <el-form-item label="售后脚注" prop="afterSaleFootnote">
        <el-input v-model="ruleForm.afterSaleFootnote" class="w350" placeholder="售后脚注"></el-input>
      </el-form-item>
      <el-form-item label="隐藏购买列表页生活号组件" prop="purchaseListDisplay">
        <div class="form_radio">
          <el-radio v-model="radio1" label="0">是</el-radio>
          <el-radio v-model="radio1" label="1">否</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="隐藏我的出行权益卡页生活号组件" prop="purchaseListDisplay">
        <div class="form_radio">
          <el-radio v-model="radio2" label="0">是</el-radio>
          <el-radio v-model="radio2" label="1">否</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="隐藏购买记录页生活号组件" prop="purchaseListDisplay">
        <div class="form_radio">
          <el-radio v-model="radio3" label="0">是</el-radio>
          <el-radio v-model="radio3" label="1">否</el-radio>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="mt20" @click="submitForm('ruleForm')">确认</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import httpService from '../../service/weekCardManagement/weekCard.js'
export default {
  data() {
    return {
      type: false,
      isEmpty: true,
      radio1: '1',
      radio2: '1',
      radio3: '1',
      ruleForm: {
        propagandaSlogan: '',
        perSaleFootnote: '',
        afterSaleFootnote: '',
        useNoticeTitle: '',
        useNoticeUrl: '',
        saleNoticeTitle: '',
        saleNoticeUrl: '',
        purchaseListDisplay: 1,
        purchaseRecordDisplay: 1,
        rightsCardDisplay: 1
      },
      rules: {
        propagandaSlogan: [
          { required: true, message: '请填写宣传标语', trigger: 'change' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        perSaleFootnote: [
          { required: true, message: '请填写售前脚注', trigger: 'change' }
        ],
        afterSaleFootnote: [
          { required: true, message: '请填写售后脚注', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    submitForm(formName) {
      this.ruleForm.purchaseListDisplay = Number(this.radio1)
      this.ruleForm.rightsCardDisplay = Number(this.radio2)
      this.ruleForm.purchaseRecordDisplay = Number(this.radio3)
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.isEmpty) {
            this.addConfig()
          } else {
            this.editConfig()
          }
        } else {
          this.$message.error('表单验证错误')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getDetail() {
      httpService.getSaleGeneralCfg().then(
        response => {
          if (response && response.data) {
            this.ruleForm = response.data
            this.radio1 = response.data.purchaseListDisplay === 0 ? '0' : '1'
            this.radio2 = response.data.rightsCardDisplay === 0 ? '0' : '1'
            this.radio3 = response.data.purchaseRecordDisplay === 0 ? '0' : '1'            
            this.isEmpty = false
          } else {
            this.isEmpty = true
          }
        },
        response => {
          this.$message.error(
            response.subMsg ||
              response.message ||
              response.msg ||
              '请求服务器连接失败!'
          )
        }
      )
    },
    addConfig() {
      httpService.addSaleGeneralCfg(this.ruleForm).then(
        response => {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        },
        response => {
          this.$message.error(
            response.subMsg ||
              response.message ||
              response.msg ||
              '请求服务器连接失败!'
          )
        }
      )
    },
    editConfig() {
      httpService.updateSaleGeneralCfg(this.ruleForm).then(
        response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        },
        response => {
          this.$message.error(
            response.subMsg ||
              response.message ||
              response.msg ||
              '请求服务器连接失败!'
          )
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
