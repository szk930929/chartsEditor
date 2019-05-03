<template>
    <div ref="charts" class="charts_panel"></div>
</template>
<script>
export default {
  name: 'chartsPanel',
  props:['chartsOptions'],
  data () {
    return {
      chart: {},
    }
  },
  computed:{
    optionClone:function(){
        return this.chartsOptions;
    }
  },
  watch:{
      optionClone:{
          handler(newValue, oldValue) {
                let _this = this
                this.chart.setOption(this.optionClone,true);
    　　　　},
    　　　　deep: true
      },
      chartsOptions:{
           handler(newValue, oldValue) {
                let _this = this
                this.chart.setOption(this.chartsOptions,true);
    　　　　},
    　　　　deep: true
      }
  },
  mounted() {
        this.chart = this.$echarts.init(this.$refs.charts);
        this.chart.setOption(this.chartsOptions,true);
  }
}
</script>
<style scoped>
    .charts_panel{
        width: 100%;
        height: 500px;
    }
</style>
