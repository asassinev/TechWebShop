<template>
    <div class="star-rating">
        <label
            class="star-rating__star"
            v-for="rating in ratings"
            :key="rating.id"
            :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
            v-on:click="set(rating)"
            v-on:mouseover="star_over(rating)"
            v-on:mouseout="star_out">
            <input
                class="star-rating star-rating__checkbox"
                type="radio"
                :value="rating"
                :name="name"
                v-model="value"
                :disabled="disabled">
            ★
        </label>
    </div>
</template>

<script>
export default {
  data () {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5]
    }
  },
  props: {
    name: String,
    value: null,
    id: String,
    disabled: Boolean,
    required: Boolean
  },
  methods: {
    star_over (index) {
      if (!this.disabled) {
        this.temp_value = this.value
        this.value = index
        return this.value
      }
    },
    star_out () {
      if (!this.disabled) {
        this.value = this.temp_value
        return this.value
      }
    },
    set (value) {
      if (!this.disabled) {
        this.temp_value = value
        this.value = value
        return this.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

.star-rating {

  &__star {
    display: inline-block;
    padding: 1px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #FFD700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }
  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>
