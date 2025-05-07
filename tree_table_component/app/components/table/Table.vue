<template>
    <div class = "table"  >
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in paginatedData" :key="row">
                    <td v-for="column in columns" :key="column" >
                        <div v-if = "column.value == 'name'"  class = "name">
                            {{ row[column.value] }}
                        </div>
                        <div v-if = "column.value == 'tags' " class = "table-tags"  >
                            <div v-for = "item in row[column.value]" :key = "item"   >
                                <span v-if = "item == 'nice'" class = "nice" >{{ item }}</span>
                                <span v-if = "item == 'loser'" class = "loser" >{{ item }}</span>
                                <span v-if = "item == 'teacher'" class = "teacher" >{{ item }}</span>
                                <span v-if = "item == 'developer'" class = "developer" >{{ item }}</span>
                            </div>
                        </div>
                        <div v-if = "column.value == 'actions'"  class = "actions">
                            <div class = "name">
                                Invite - {{ row['name'] }}
                            </div>
                            <div class = "delete" @click.stop = "togglePopConfirm(index)">
                                <Icon name = "material-symbols:delete-outline" class = "trash-box" />
                                <div v-if = "showPopConfirm == index" class = "pop-confirm">
                                    {{ row['name'] }} o'chirishni xoxlaysizmi?
                                    <div class = "buttons">
                                        <button >Yo'q</button>
                                        <button @click = "deleteItem(index)" >Ha</button>
                                    </div>
                                </div>
                            </div>
                            <div class = "more-actions"  >
                                <Icon name = "mdi:dots-vertical" class = "dots" />
                            </div>
                                
                        </div>
                        <div v-if="column.value == 'age' || column.value == 'address'" >
                            {{ row[column.value] }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class = "table-footer">
            <div class="pagination">
                <button @click="prevPage" v-if ="currentPage != 1"><Icon name = "material-symbols:arrow-back-ios" /></button>
                <button v-for = "item in totalPages" :key = "item" :class = "item == currentPage ? 'current-page' : '' "  @click = "updatePage(item)">{{ item }}</button>
                <button @click="nextPage" v-if="currentPage != totalPages"><Icon name = "material-symbols:arrow-forward-ios" /></button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
        
const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
})




const showPopConfirm = ref(-1)
const lastPopConfirm = ref(-1)

const currentPage = ref(1)
const itemsPage = 10


const totalPages = computed(() => Math.ceil(props.data.length / itemsPage))
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPage
    return props.data.slice(start, start + itemsPage)
})

const updatePage = (page)=> {
    showPopConfirm.value = - 1
    lastPopConfirm.value = - 1
    currentPage.value = page
}

const prevPage = () => {
    showPopConfirm.value = - 1
    lastPopConfirm.value = - 1
    if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
    showPopConfirm.value = - 1
    lastPopConfirm.value = - 1
    if (currentPage.value < totalPages.value) currentPage.value++
}


const togglePopConfirm =(index) => {
    if (index == -1) {
        showPopConfirm.value = - 1
        lastPopConfirm.value = - 1
    }
    else if (lastPopConfirm.value == index) {
        showPopConfirm.value = - 1
        lastPopConfirm.value = - 1
    } else {
        showPopConfirm.value = index
        lastPopConfirm.value = index
    }
}   


const deleteItem = (index) => {

}




</script>
  

  