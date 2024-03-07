<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>发布管理</el-breadcrumb-item>
      <el-breadcrumb-item>我的帖子</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="10"> 
        <el-col :span="4">
          <el-select v-model="tac" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.tac"
              :label="item.label"
              :value="item.tac"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="topicName" placeholder="请输入标题"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>

      <el-table :data="topicData" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="topic" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="label" label="类别" width="180"> </el-table-column>
        <el-table-column prop="time" label="发帖时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
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
  name: "MyTopic",
  data() {
    return {
      topicName: "",
      topicData: [
        {
          topic: "来了吗",
          label: "1",
          time: "2021-05-02",
        },
        {
          topic: "如来",
          label: "2",
          time: "2023-05-03",
        },
        {
          topic: "发贴了吗",
          label: "2",
          time: "2018-05-04",
        },
        {
          topic: "像发",
          label: "3",
          time: "2016-05-11",
        },
      ],
      options: [
        {
          tac: "选项1",
          label: "1",
        },
        {
          tac: "选项2",
          label: "2",
        },
        {
          tac: "选项3",
          label: "3",
        },
      ],
      tac: "",
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