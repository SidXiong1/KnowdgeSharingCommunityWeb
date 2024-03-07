<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>管理权限</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input v-model="artName" placeholder="请输入文章标题"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>

      <el-table :data="artData" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="artTopic" label="文章标题" width="180">
        </el-table-column>
        <el-table-column prop="time" label="发布时间" width="180">
        </el-table-column>
        <el-table-column> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "ColArt",
  data() {
    return {
      artName: "",
      artData: [
        {
          artTopic: "这是文章一",
          time: "2021-05-02",
        },
        {
          artTopic: "文章二迷路了",
          time: "2023-05-03",
        },
        {
          artTopic: "我是文章三",
          time: "2018-05-04",
        },
        {
          artTopic: "文章二在这",
          time: "2016-05-11",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 15px;
  font-size: 12px;

}

.el-table {
  margin-top: 15px;
  font-size: 12px;
}
.el-pagination {
  margin-top: 15px;
  font-size: 12px;
}
</style>