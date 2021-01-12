import { computed } from "vue";
import { useStore } from "vuex";

export default function() {
  const store = useStore();

  const filter = computed(() => store.state.filter);
  const setCommitFilter = (val) => {
    store.commit("UPDATE_FILTER", val);
  };

  return {
    filter,
    setCommitFilter,
  };
}
