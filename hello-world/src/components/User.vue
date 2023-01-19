<template>
    <h1>中户中心</h1>
    <h1>姓名：{{username}}</h1>
    <router-view></router-view>
</template>
<script>
export default {
    props: [
        'username'
    ]
}
</script>