<template>
  <div>
    <el-table :data="params">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类" width="240"></el-table-column> -->
      <el-table-column prop="paramName" label="名称" width="240"></el-table-column>
      <el-table-column prop="paramVal" label="值" width="240"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/param/create/${scope.row._id}`)"
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
      params: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("api/param");
      this.params = res.data;
    },
    async remove(row) {
      this.$confirm(`是否删除该分类,${row.name}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`api/param/${row._id}`);
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
