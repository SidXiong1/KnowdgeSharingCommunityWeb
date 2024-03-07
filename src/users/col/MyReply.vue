<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>发布管理</el-breadcrumb-item>
      <el-breadcrumb-item>我的回复</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="replyData" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="topic" label="帖子题目" width="180">
        </el-table-column>
        <el-table-column prop="reply" label="回复内容" width="180"> </el-table-column>
        <el-table-column prop="time" label="发帖时间">
        </el-table-column>
        <el-table-column> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
  name: "MyReply",
  data() {
    return {
      replyData: [
        {
          topic: "来了吗",
          reply: "到了吗",
          time: "2021-05-02",
        },
        {
          topic: "如来",
          reply: "若至",
          time: "2023-05-03",
        },
        {
          topic: "如来",
          reply: "若至",
          time: "2018-05-04",
        },
        {
          topic: "像发",
          reply: "111，真的吗",
          time: "2016-05-11",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 10px;
  font-size: 12px;
}
.el-table {
  font-size: 12px;
}
.el-pagination {
  margin-top: 15px;
  font-size: 12px;
}
</style>