<template>
    <Layout>
        <Header>
          <div class="block_head">
            <Icon type="logo-freebsd-devil" size='60' color='#fff' />
            <b>chartsEditor</b>
          </div>
        </Header>
        <Content></Content>
        <Footer>Footer</Footer>
    </Layout>
</template>
<script>
export default {
  name: 'chartsEditor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
</style>