<template>

    <div  @click="toggle" class="tree-label">
        <div  class = "tree-item" > 
            <Icon v-if = "hasChildren" name = "material-symbols:arrow-right-rounded" :class = "isOpen? 'open' : ''" class = "icon" />  
            <span v-else style = "width: 22px; padding-right: 1rem" ></span>
            {{ data.label }}
        </div>
        <span class="indicator" :style="{ left:`${depth * (-1.5)}rem` }"></span>
        <div class = "background" :style="{ left:`${depth * (-1.5)}rem`}"></div>
    </div>
  
    <div v-if="isOpen && hasChildren" class="tree-children">
        <TreeElement v-for="child in data.children" :key="child" :data="child"  :depth="depth + 1"/>
    </div>
  </template>
  
<script setup>


import TreeElement from './TreeElement.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    }
})

const isOpen = ref(false)

const toggle = () => {
    if (hasChildren.value) {
        isOpen.value = !isOpen.value
    }
}

const hasChildren = computed(() =>
    Array.isArray(props.data.children) && props.data.children.length > 0
)


</script>