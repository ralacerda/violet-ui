<template>
  <button
    class="violet-button"
    :style="styleObj"
    :disabled="$props.disabled"
    @click="$emit('click')"
  >
    <Icon v-if="$props.icon" :icon="'material-symbols:' + $props.icon" />
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { Icon } from "@iconify/vue2";

const colors = {
  primary: {
    default: "#9147ff",
    hover: "#772ce8",
    active: "#5c0dd3",
  },
  secondary: {
    default: "#8557b3",
    hover: "#6f4a94",
    active: "#553a70",
  },
};

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    /** If set to true, the button will take up the full width */
    fill: {
      type: Boolean,
      default: false,
    },
    /** Name for the Material Design icon  */
    icon: {
      type: String,
      default: "",
    },
    variant: {
      type: String as PropType<"primary" | "secondary">,
      default: "primary",
      validator: (value: string) => {
        return ["primary", "secondary"].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    /** This is emitted when the user clicks the button */
    click: () => {
      return true;
    },
  },
  computed: {
    styleObj() {
      return {
        width: this.fill ? "100%" : "initial",
        "--violet-button-color": colors[this.$props.variant].default,
        "--violet-button-hover-color": colors[this.$props.variant].hover,
        "--violet-button-active-color": colors[this.$props.variant].active,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.violet-button {
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 4px;
  font-size: 14px;
  background-color: var(--violet-button-color);
  color: white;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover:not(:disabled) {
    background-color: var(--violet-button-hover-color);
  }

  &:active:not(:disabled) {
    background-color: var(--violet-button-active-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
