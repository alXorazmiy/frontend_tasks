<template>
    <MainLayout>
        <div class="container" style="margin-top: 150px;">
            <Table :data="tableData" :columns="columns" />
        </div>
    </MainLayout>
</template>

<script setup>


import MainLayout from "~/layouts/MainLayout.vue"
import Table from "../../components/table/Table.vue";


import { useTableData } from '@/utils/tableData.js'

const { tableData } = useTableData()


const columns = [
    { label: 'Name', value: 'name' },
    { label: 'Age', value: 'age' },
    { label: 'Address', value: 'address' },
    { label: 'Tags', value: 'tags' },
    { label: 'Actions', value: 'actions' }
]



</script>