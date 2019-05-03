<template>
    <Layout>
        <Header>
          <div class="block_head">
            <Icon type="logo-freebsd-devil" size='60' color='#fff' />
            <b>chartsEditor</b>
            <Button style="float:right;margin-top:15px" @click="showCode = true" type="primary">查看代码</Button>
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
                      <FormItem label="图例设置">
                          <RadioGroup v-model="legendAlign" @on-change="legendAlignChange" type="button" size="small">
                              <Radio label="left">居左</Radio>
                              <Radio label="center">居中</Radio>
                              <Radio label="right">居右</Radio>
                              <Radio label="none">不显示</Radio>
                          </RadioGroup>
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
        <Drawer title="Code" placement="left" :closable="false" v-model="showCode" :width="30">
            <p>{{option}}</p>
        </Drawer>
    </Layout>
</template>
<script>
import {getChartsObject} from './../../static/security/index.js'
export default {
  name: 'chartsEditor',
  data () {
    return {
      showCode:false,
      legendAlign:'center',
      option:{
          title:{
					show:true,
					text:'',
				},
				legend:{
					show:true,
          left:'center',
          top:'top',
          orient:'horizontal',
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
  methods:{
    legendAlignChange(value) {
      const _this = this;
      switch (value) {
        case 'none':
          _this.option.legend.show = false;
          break;
        case 'left':
          _this.option.legend.show = true;
          _this.option.legend.left = 'left';
          _this.option.legend.top = 'middle';
          _this.option.legend.orient = 'vertical';
          break;
        case 'right':
          _this.option.legend.show = true;
          _this.option.legend.left = 'right';
          _this.option.legend.top = 'middle';
          _this.option.legend.orient = 'vertical';
          break;
        case 'center':
          _this.option.legend.show = true;
          _this.option.legend.left = 'center';
          _this.option.legend.top = 'top';
          _this.option.legend.orient = 'horizontal';
          break;
        default:
          break;
      }
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