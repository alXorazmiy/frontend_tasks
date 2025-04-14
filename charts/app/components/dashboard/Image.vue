<template>
    <div 
        class="absolute bg-[#263040] rounded shadow p-4 resize-box cursor-pointer"
        @mousedown="startDrag"
        :style="{
            left: props.position.x + 'px',
            top: props.position.y + 'px',
            width: width + 'px',
            height: height + 'px'
        }"
    >   
        <div v-if="fileDisplay">
            <img 
                :src="fileDisplay" 
                class="object-cover rounded" 
                :style="{ width: width + 'px', height: height - 40 + 'px' }" 
            />
        </div>
        <div v-else class="flex flex-col justify-center items-center h-full border border-dashed">
            <Icon name="material-symbols:imagesmode-outline" size="100" class="text-white" />
            <span class="mt-10 text-gray-500 w-[70%] text-center">
                You can only upload images in jpg, png, jpeg formats.
            </span>
            <label for="fileInput" class="cursor-pointer">
                <div class="px-2 py-1.5 mt-8 text-white text-center rounded-sm text-[15px] bg-[#f02c56] w-[120px]">
                    Select file
                </div>
                <input type="file" id="fileInput" hidden @change="onFileChange">
            </label>
        </div>
        
        <div 
            class="absolute -bottom-2 right-0 cursor-se-resize" 
            @mouseenter="resize_if = true" 
            @mouseleave="resize_if = false" 
            @mousedown.prevent="startResize"
        >
            <Icon name="mdi:resize-bottom-right" class="text-white" size="30" />
        </div>
        <div 
            class="absolute top-1 right-1 bg-[#1d2633] flex items-center p-2 rounded-md cursor-pointer" 
            @click="closeChart"
        >
            <Icon name="material-symbols:delete-rounded" class="text-[#f02c56]" size="24" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['dragging', 'close-chart', 'resize'])

const props = defineProps({
    position: Object
})

const fileDisplay = ref(null)
const width = ref(500)
const height = ref(400)
const resize_if = ref(false)

let startX = 0, startY = 0, startW = 0, startH = 0
let startDragX = 0, startDragY = 0

const startResize = (e) => {
    startX = e.clientX
    startY = e.clientY
    startW = width.value
    startH = height.value

    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResize)
}

const resize = (e) => {
    const dx = e.clientX - startX
    const dy = e.clientY - startY
    width.value = Math.max(200, startW + dx)
    height.value = Math.max(200, startH + dy)
    emitSizeUpdate()
}

const stopResize = () => {
    window.removeEventListener('mousemove', resize)
    window.removeEventListener('mouseup', stopResize)
}

const startDrag = (e) => {
    if (!resize_if.value) {
        startDragX = e.clientX - props.position.x
        startDragY = e.clientY - props.position.y

        window.addEventListener('mousemove', drag)
        window.addEventListener('mouseup', stopDrag)
    }
}

const drag = (e) => {
    const newX = e.clientX - startDragX
    const newY = e.clientY - startDragY
    emit('dragging', { x: newX, y: newY })
}

const stopDrag = () => {
    window.removeEventListener('mousemove', drag)
    window.removeEventListener('mouseup', stopDrag)
}

const emitSizeUpdate = () => {
    emit('resize', { height: height.value, width: width.value })
}

const closeChart = () => {
    emit('close-chart')
}

const onFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return
    fileDisplay.value = URL.createObjectURL(selectedFile)
}
</script>
