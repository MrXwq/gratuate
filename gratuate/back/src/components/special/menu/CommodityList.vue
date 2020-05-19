<template>
  <div>
    <el-table :data="commodities">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="preferential" label="现价"></el-table-column>
      <el-table-column prop="title" label="商品标题"></el-table-column>
      <el-table-column prop="freight" label="运费"></el-table-column>
      <el-table-column prop="origin" label="发货地"></el-table-column>
      <el-table-column prop="sales" label="月销量"></el-table-column>
      <!-- <el-table-column prop="categories" label="分类"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/commodity/create/${scope.row._id}`)"
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
      commodities: []
    };
  },
  created() {
      this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("api/commodity");
      this.commodities = res.data;
    },
    async remove(row) {
      this.$confirm(`是否删除该商品,${row.title}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`api/commodity/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>