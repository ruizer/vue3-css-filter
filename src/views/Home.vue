<template>
  <a-layout>
    <a-layout-sider width="240" style="height: 100%;">
      <HandleFilter />
    </a-layout-sider>
    <a-layout-content style="margin: 0;height: 100%">
      Content
      {{ filter }}
    </a-layout-content>
  </a-layout>
</template>
<script>
import HandleFilter from "@/components/HandleFilter.vue";
import filterApi from "@/componentApi/filter.js";
export default {
  name: "home-page",
  components: { HandleFilter },
  setup() {
    const { filter } = filterApi();
    return { filter };
  },
};
</script>

<style lang="less" scoped>
.ant-layout {
  width: 100%;
  height: 100%;
  .ant-layout-sider.ant-layout-sider-dark {
    color: #ffffff;
  }
}
</style>
