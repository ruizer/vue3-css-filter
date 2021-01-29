<template>
  <a-layout>
    <a-layout-sider width="280" style="height: 100%;padding:5px;">
      <HandleFilter @reset="resetFilter" @export-img="exportImg" />
    </a-layout-sider>
    <a-layout-content style="margin: 0;height: 100%">
      <div class="img-content">
        <img ref="img" src="@/assets/ade68bfb1d.jpg" :style="imgFilterStyle" />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import HandleFilter from "@/components/HandleFilter.vue";
import filterApi from "@/componentApi/filter.js";
import { computed, ref, getCurrentInstance } from "vue";
export default {
  name: "home-page",
  components: { HandleFilter },
  setup() {
    const { filter, resetFilter } = filterApi();
    const { ctx } = getCurrentInstance();

    const imgName = "猫猫";
    const img = ref(null);

    const imgFilterStyle = computed(() => {
      const value = filter.value;
      const dropShadow = `drop-shadow(${value.offsetX}px ${value.offsetY}px ${value.blurRadius}px ${value.color})`;
      return {
        filter: `blur(${value.blur}px) brightness(${value.brightness}) contrast(${value.contrast}) grayscale(${value.grayscale})hue-rotate(${value.hueRotate}deg) invert(${value.invert}) opacity(${value.opacity}) saturate(${value.saturate})sepia(${value.sepia}) ${dropShadow}`,
      };
    });
    const exportImg = () => {
      const $img = img.value,
        filterSetting = imgFilterStyle.value.filter;
      const { naturalWidth, naturalHeight } = $img;
      const ratio = window.devicePixelRatio || 1;

      let canvas = document.createElement("canvas");

      canvas.width = naturalWidth * ratio;
      canvas.height = naturalHeight * ratio;
      canvas.style.width = `${naturalWidth}px`;
      canvas.style.height = `${naturalHeight}px`;

      const imgCtx = canvas.getContext("2d");
      if (!imgCtx.filter) {
        ctx.$message.info("此浏览器暂不支持 CanvasRenderingContext2D.filter ");
        return;
      }

      imgCtx.filter = filterSetting;
      imgCtx.drawImage($img, 0, 0, naturalWidth, naturalHeight);

      let link = document.createElement("a");
      link.href = canvas.toDataURL("", 1);
      link.download = imgName;
      link.click();
      setTimeout(() => {
        link = null;
        canvas = null;
      });
    };
    return { img, filter, imgFilterStyle, resetFilter, exportImg };
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
.img-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 800px;
  }
}
</style>
