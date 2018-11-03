<template>
    <Layout>
        <Header>
          <div class="block_head">
            <Icon type="logo-freebsd-devil" size='60' color='#fff' />
            <b>chartsEditor</b>
          </div>
        </Header>
        <Content>
          <Row>
              <Col span="17">
                <chartsPanel :chartsOptions="option"></chartsPanel>
              </Col>
              <Col span="7">
                <div class="right_tools-block">
                  <div>
                    <Form :label-width="80">
                      <FormItem label="图表标题">
                          <Input v-model="title" placeholder="输入标题" />
                      </FormItem>
                    </Form>
                  </div>
                  <Divider />
                </div>
              </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
</template>
<script>
import {getChartsObject} from './../../static/security/index.js'
export default {
  name: 'chartsEditor',
  data () {
    return {
      option:{
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      },
      title:'',
    }
  },
  created() {
    this.option = getChartsObject('line');
  },
  components: {
			'chartsPanel':resolve => {require(['./chartsTools/chartsPanel.vue'], resolve)},
	}
}
</script>
<style scoped>
    .block_head{
      width: 100%;
      height: 65px;
      background-color: #515a6e;
      color: #fff;
    }
    .block_head b{
      font-size: 30px;
      vertical-align: middle;
      margin-left: 30px;
    }
    .right_tools-block{
      width: 100%;
      padding: 10px;
    }
    .right_tools-block .tools-item{
        width: 100%;
    }
</style>