<template>
  <div>
    <el-table :data="users">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类" width="240"></el-table-column> -->
      <el-table-column prop="username" label="用户名" width="240"></el-table-column>
      <!-- <el-table-column prop="password" label="密码" width="240"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/user/create/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("user/users");
      this.users = res.data;
    },
    async remove(row) {
      this.$confirm(`是否删除该用户名,${row.username}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`user/users/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
