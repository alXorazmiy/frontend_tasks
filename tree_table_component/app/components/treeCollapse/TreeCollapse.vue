<template>
    <div class = "tree-collapse">
        <TreeElement v-for="item in data" :key="item" :data="item" :depth="0" />
    </div>

</template>
  
<script setup>
import TreeElement from './TreeElement.vue'

defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>


