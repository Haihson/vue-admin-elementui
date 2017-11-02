<template>
  <div>
    <template v-for="(node,index) in nodes" v-if="!node.hidden">
      <el-submenu :index="index+''" v-if="!node.leaf">
        <template slot="title">
          <i :class="node.iconCls"></i>{{ node.name }}
        </template>
        <menu-tree :nodes="node.children"></menu-tree>
      </el-submenu>
      <!-- 考虑到没有子节点，根节点处理点击跳转 -->
      <el-menu-item v-if="node.leaf && node.children.length <= 0" :index="node.path" :route="{name:node.name}">
        <i :class="node.iconCls"></i>{{ node.name }}
      </el-menu-item>
      <el-menu-item v-if="node.leaf && node.children.length > 0" :index="node.children[0].path" :route="{name:node.children[0].name}">
        <i :class="node.iconCls"></i>{{ node.children[0].name }}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'MenuTree',
    data () {
      return {}
    },
    props: {
      nodes: {
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
