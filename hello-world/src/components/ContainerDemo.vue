<template>
  <el-container>
    <el-header height="80px" style="padding:0">
      <div class="header">教务系统学生管理</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu class="aside" @select="selectFunc" default-active="1" :unique-opened="true">
            <el-submenu index="1">
                <template #title>
                    <span>七年级</span>
                </template>
                <el-menu-item index="1">1班</el-menu-item>
                <el-menu-item index="2">2班</el-menu-item>
                <el-menu-item index="3">3班</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template #title>
                    <span>八年级</span>
                </template>
                <el-menu-item index="4">1班</el-menu-item>
                <el-menu-item index="5">2班</el-menu-item>
                <el-menu-item index="6">3班</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template #title>
                    <span>九年级</span>
                </template>
                <el-menu-item index="7">1班</el-menu-item>
                <el-menu-item index="8">2班</el-menu-item>
                <el-menu-item index="9">3班</el-menu-item>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-container>
        <el-header height="80px" style="padding:0;margin:0">
            <el-container class="subHeader">
                <div class="desc">{{desc}}</div>
                <el-button style="width:100px;height:30px;margin:20px">新增记录</el-button>
            </el-container>
        </el-header>
        <el-main style="margin:0;padding:0">
            <div class="content">
                <el-table :data="stus">
                    <el-table-column
                    prop="name"
                    label="姓名">
                    </el-table-column>
                    <el-table-column
                    prop="age"
                    label="年龄">
                    </el-table-column>
                    <el-table-column
                    prop="sex"
                    label="性别">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="录入日期">
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-footer height="30px" class="footer">Vue框架搭建，ElementPlus提供组件支持</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
    mounted () {
        // const instance =this. axios.create({
        //     baseURL: '/myApi',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'custom'}
        // });
        this.axios.defaults.baseURL = '/myApi'
        let city = "上海"
        city = encodeURI(city)
        let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
        let i = this.axios.interceptors.request.use((config)=>{
            alert("请求将要开始")
            return config
        },(error)=>{
            alert("请求出现错误")
            return Promise.reject(error)
        })
        this.axios.interceptors.request.eject(i)
        this.axios.interceptors.response.use((response)=>{
            alert(response.status)
            return response
        },(error)=>{
            return Promise.reject(error)
        })
        this.axios.get(api).then((response)=>{
            console.log(response.data);
        })
        // this.axios({
        //     method:'get',
        //     url:"/myApi" + api,
        // }).then((response)=>{
        //     console.log(response.data)
        // })
    },
    data () {
        return {
            desc:"七年级1班学生统计",
            stus:[
                {
                    name:"小王",
                    age:14,
                    sex:"男",
                    date:"2020年8月15日"
                },{
                    name:"小张",
                    age:15,
                    sex:"男",
                    date:"2020年5月15日"
                },{
                    name:"小秋",
                    age:15,
                    sex:"女",
                    date:"2020年8月15日"
                }
            ]
        }
    },
    methods: {
        selectFunc(index) {
            let strs = ["七","八","九"]
            let rank = strs[Math.floor((index-1) / 3)]
            this.desc = `${rank}年级${((index-1) % 3) + 1}班学生统计`
        }
    }
}
</script>

<style scoped>

.header {
    font-size: 30px;
    line-height: 80px;
    background-color: #f1f1f1;
}

.aside {
    background-color: wheat;
    height: 600px;
}

.subHeader {
    background-color:cornflowerblue;
}

.desc {
    font-size: 25px;
    line-height: 80px;
    color: white;
    width: 800px;
}

.content {
    height: 410px;
}

.footer {
    background-color:dimgrey;
    color: white;
    font-size: 17px;
    line-height: 30px;
}

</style>
