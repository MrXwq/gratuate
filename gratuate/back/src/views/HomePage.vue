<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">商品</template>
              <el-menu-item index="/commodity/create">新建商品</el-menu-item>
              <el-menu-item index="/commodity/list">商品列表</el-menu-item>
              <el-menu-item index="/param/create">新建商品参数</el-menu-item>
              <el-menu-item index="/param/list">商品参数列表</el-menu-item>
              <el-menu-item index="/service/create">新建服务</el-menu-item>
              <el-menu-item index="/service/list">服务列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group>
              <template slot="title">运营</template>
              
            </el-menu-item-group>-->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>商用
            </template>
            <el-menu-item-group>
              <template slot="title">广告位</template>
              <el-menu-item index="/ads/create">新建广告位</el-menu-item>
              <el-menu-item index="/ads/list">广告位列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" v-if="authority == 'administrator'">
            <template slot="title">
              <i class="el-icon-message"></i>用户管理
            </template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/user/create">新建用户</el-menu-item>
              <el-menu-item index="/user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
              <el-dropdown-item>
                <el-button type="primary">点击？</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>-->
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
    
<script>
export default {
  name: "HomePage",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      users: [],
      authority: ''
    };
  },
  created() {
    // this.getUsers()
    this.authority = localStorage.authority
  },
  methods: {
    async getUsers() {
      const res = await this.$http.get("user/users");
      // console.log(res)
      this.users = res.data;
    }
  }
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>