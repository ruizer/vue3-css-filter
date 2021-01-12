import { createStore } from "vuex";

const filters = {
  blur: 0, // 高斯模糊
  brightness: 1, // 亮度
  contrast: 100, // 对比度
  grayscale: 0, // 灰度
  hueRotate: 0, // 色相旋转
  invert: 0, // 反转
  opacity: 100, // 透明度
  saturate: 100, // 饱和度
  sepia: 0, // 深褐色
  // drop-shadow() 阴影效果
  offsetX: 0,
  offsetY: 0,
  blurRadius: 0,
  color: "#000000",
};

export default createStore({
  state: {
    filter: { ...filters },
  },
  mutations: {
    UPDATE_FILTER(state, filter) {
      state.filter = { ...state.filter, ...filter };
    },
    RESET_FILTER(state) {
      state.filter = { ...filters };
    },
  },
  actions: {},
  modules: {},
});
