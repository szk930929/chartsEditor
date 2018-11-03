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
                          <Input v-model="option.title.text" placeholder="输入标题" />
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
          title:{
					show:true,
					text:'',
				},
				legend:{
					show:true,
					align:'auto',
				},
				xAxis: {
					type: 'category',
					show: false,
					name:'',
					nameTextStyle:{
						color:'#333',
						fontStyle:'normal',
						fontSize:12,
						align:'center',
					},
					axisLine:{
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					splitLine:{
						show:false,
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: [{
					type: 'value',
					nameTextStyle:{
						color:'#333',
						fontStyle:'normal',
						fontSize:12,
						align:'center',
					},
					axisLine:{
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					splitLine:{
						show:true,
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
				}],
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line'
				}],
				colors: ['#5182E4', '#9BCC66', '#3FB27E', '#F7CB4A', '#F88D48', '#F35352', '#CE62D6', '#8954D4', '#5156B8', '#51B4F1', '#69D4DB', '#D42D6B']
      },
      title:'',
    }
  },
  created() {
    this.option = getChartsObject('line').getDefaultOpt();
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