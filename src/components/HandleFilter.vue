<template>
  <a-form :model="filter" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="高斯模糊">
      <a-slider
        :min="0"
        :max="20"
        :step="0.1"
        :value="filter.blur"
        @change="change"
      />
    </a-form-item>
  </a-form>
</template>
<script>
import { reactive } from "vue";
import filterApi from "@/componentApi/filter.js";
export default {
  name: "handle-filter",
  setup() {
    const { filter, setCommitFilter } = filterApi();
    const labelCol = reactive({ span: 8 });
    const wrapperCol = reactive({ span: 16 });
    const change = (blur) => {
      setCommitFilter({ blur });
    };
    return { filter, change, labelCol, wrapperCol };
  },
};
</script>

<style lang="less" scoped>
::v-deep.ant-form .ant-form-item-label > label {
  color: #ffffff;
}
</style>
