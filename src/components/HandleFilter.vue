<template>
  <a-form :model="filter" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="高斯模糊">
      <a-slider
        :min="0"
        :max="20"
        :step="0.1"
        :value="filter.blur"
        @change="change('blur', $event)"
      />
    </a-form-item>
    <a-form-item label="亮度">
      <a-slider
        :min="0"
        :max="5"
        :step="0.1"
        :value="filter.brightness"
        @change="change('brightness', $event)"
      />
    </a-form-item>
    <a-form-item label="对比度">
      <a-slider
        :min="0"
        :max="20"
        :step="0.1"
        :value="filter.contrast"
        @change="change('contrast', $event)"
      />
    </a-form-item>
    <a-form-item label="灰度">
      <a-slider
        :min="0"
        :max="100"
        :step="0.1"
        :value="filter.grayscale"
        @change="change('grayscale', $event)"
      />
    </a-form-item>
    <a-form-item label="色相旋转">
      <a-slider
        :min="0"
        :max="360"
        :step="1"
        :value="filter.hueRotate"
        @change="change('hueRotate', $event)"
      />
    </a-form-item>
    <a-form-item label="反转">
      <a-slider
        :min="0"
        :max="1"
        :step="0.01"
        :value="filter.invert"
        @change="change('invert', $event)"
      />
    </a-form-item>
    <a-form-item label="透明度">
      <a-slider
        :min="0"
        :max="1"
        :step="0.01"
        :value="filter.opacity"
        @change="change('opacity', $event)"
      />
    </a-form-item>
    <a-form-item label="饱和度">
      <a-slider
        :min="0"
        :max="10"
        :step="0.1"
        :value="filter.saturate"
        @change="change('saturate', $event)"
      />
    </a-form-item>
    <a-form-item label="深褐色">
      <a-slider
        :min="0"
        :max="1"
        :step="0.01"
        :value="filter.sepia"
        @change="change('sepia', $event)"
      />
    </a-form-item>
    <a-form-item label="阴影效果"></a-form-item>
    <a-form-item label="水平偏移">
      <a-slider
        :min="-100"
        :max="100"
        :step="1"
        :value="filter.offsetX"
        @change="change('offsetX', $event)"
      />
    </a-form-item>
    <a-form-item label="垂直偏移">
      <a-slider
        :min="-100"
        :max="100"
        :step="1"
        :value="filter.offsetY"
        @change="change('offsetY', $event)"
      />
    </a-form-item>
    <a-form-item label="模糊半径">
      <a-slider
        :min="0"
        :max="100"
        :step="1"
        :value="filter.blurRadius"
        @change="change('blurRadius', $event)"
      />
    </a-form-item>
    <a-form-item label="阴影颜色">
      <input type="color" :value="filter.color" @change="changeColor" />
      <span style="color:#fff;padding-left:10px;">{{ filter.color }}</span>
    </a-form-item>
  </a-form>
  <div style="display:flex;justify-content: space-between;padding:0 20px;">
    <a-button @click="reset">还原</a-button>
    <a-button type="primary" @click="exportImg">导出</a-button>
  </div>
</template>
<script>
import { reactive } from "vue";
import filterApi from "@/componentApi/filter.js";
export default {
  name: "handle-filter",
  // emits: ["reset", "exportImg"],
  emits: {
    reset: null,
    exportImg: null,
  },
  setup(props, { emit }) {
    /* eslint-disable */
    const { filter, setCommitFilter } = filterApi();
    const labelCol = reactive({ span: 8 });
    const wrapperCol = reactive({ span: 16 });
    const change = (key, value) => {
      setCommitFilter({ [key]: value });
    };
    const changeColor = (e) => {
      const color = e.target.value;
      setCommitFilter({ color });
    };

    const reset = () => {
      emit("reset");
    };
    const exportImg = () => {
      emit("export-img");
    };
    return {
      filter,
      change,
      labelCol,
      wrapperCol,
      changeColor,
      reset,
      exportImg,
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep.ant-form .ant-form-item {
  margin-bottom: 0;
  .ant-form-item-label > label {
    color: #ffffff;
  }
}
</style>
