<template>
   <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                         <img src="../assets/images/site_logo.png" title="点滴日记-日记本,网络日记本,在线日记应用" />
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            用户中心
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-navigate"></Icon>
                            记录日记
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-keypad"></Icon>
                            建议
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-analytics"></Icon>
                            关于
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-paper"></Icon>
                            退出登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                用户中心
                            </template>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                我的日记本
                            </template>
                            <MenuItem name="2-1">记录日记</MenuItem>
                            <MenuItem name="2-2">所有日记</MenuItem>
                            <MenuItem name="2-3">日记标签</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                我的资料
                            </template>
                            <MenuItem name="3-1">我的头像</MenuItem>
                            <MenuItem name="3-2">个人资料</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                安全设置
                            </template>
                            <MenuItem name="4-1">密码修改</MenuItem>
                        </Submenu>
                         <Submenu name="5">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                退出登录
                            </template>
                            <MenuItem name="5-1">安全退出</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>

export default {
    components:{
        
    }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 0px;
    left: 0px;
}
.layout-nav{
    width: 600px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<style>
  body{
      background: #fff !important;
  }
</style>


