<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>管理权限</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            v-model="userName"
            placeholder="请输入用户名或用户id"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>

      <el-table :data="userData" style="width: 100%">
        <el-table-column prop="userId" label="Id" width="180"></el-table-column>
        <el-table-column prop="userName" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="time" label="注册时间"> </el-table-column>
        <el-table-column> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >解禁</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >禁言</el-button
            >
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
  name: "ColUsers",
  data() {
    return {
      userName: "",
      userData: [
        {
          userId: "1",
          userName: "一",
          time: "2021-05-02",
        },
        {
          userId: "2",
          userName: "二",
          time: "2023-05-03",
        },
        {
          userId: "3",
          userName: "三",
          time: "2018-05-04",
        },
        {
          userId: "4",
          userName: "四",
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