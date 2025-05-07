<template>
    <MainLayout>
        <div class="container" style="margin-top: 150px;">
            <TreeCollapse :data="treeData" />
        </div>
    </MainLayout>
</template>




  
<script setup>

import MainLayout from "~/layouts/MainLayout.vue"
import TreeCollapse from "~/components/treeCollapse/TreeCollapse.vue";
import { useTreeData } from "@/utils/treeData.js"
const { treeData } = useTreeData()


</script>
