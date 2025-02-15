<template>
  <el-container>
    <el-header>
      <el-menu
        :router="true"
        default-active="/home"
        class-name="el-menu"
        mode="horizontal"
        class="centered-menu"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/problems">题库</el-menu-item>
        <el-menu-item index="/history">提交记录</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.centered-menu {
  display: flex;
  justify-content: center;
}
</style>
