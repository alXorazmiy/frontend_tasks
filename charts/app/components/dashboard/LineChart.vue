<template>
    <div 
        class="relative bg-[#263040] rounded shadow p-4 resize-box cursor-pointer z-1"
        :style="{ 
            width: width + 'px', 
            height: height + 'px', 
            left: position.x + 'px', 
            top: position.y + 'px',
            position: 'absolute' 
        }" 
        @mousedown="startDrag"
    >
        <Line ref="chartRef" :data="chartData" :options="chartOptions" />
        <div class="absolute -bottom-2 right-0 cursor-se-resize" @mouseenter="resize_if = true" @mouseleave="resize_if = false" @mousedown.prevent="startResize">
            <Icon name="mdi:resize-bottom-right" class="text-white" size="30" />
        </div>
        <div class="absolute top-1 right-1 bg-[#1d2633] flex items-center p-2 rounded-md cursor-pointer" @click="closeChart">
            <Icon name="material-symbols:delete-rounded" class="text-[#f02c56]" size="24" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// Define emits
const emit = defineEmits(['dragging', 'close-chart'])

const chartRef = ref(null)
const width = ref(500)  // Initial width
const height = ref(300) // Initial height
const position = ref({ x: 0, y: 0 }) // Initial position
const resize_if = ref(false)  // To'ldirish: resize area hover flag

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sem', 'Oct', 'Nov', 'Dec']
const dataValues = Array.from({ length: 12 }, () => Math.floor(Math.random() * 20) + 1) // Generate random data

const chartData = {
    labels,
    datasets: [{
        label: '',
        data: dataValues,
        borderColor: '#42A5F5',
        fill: true, 
        backgroundColor: 'transparent',
        tension: 0.4
    }]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: true }
    },
    scales: {
        y: {
            ticks: { display: false },
            grid: { display: false }
        },
        x: {
            grid: { display: false },
            ticks: { color: 'white' }
        }
    }
}

// Resizing functionality
let startX = 0, startY = 0, startW = 0, startH = 0

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
}

const stopResize = () => {
    window.removeEventListener('mousemove', resize)
    window.removeEventListener('mouseup', stopResize)
}

// Drag functionality
let startDragX = 0, startDragY = 0

const startDrag = (e) => {
    if (resize_if.value === false) {  // Only drag when not hovering over resize area
        startDragX = e.clientX - position.value.x
        startDragY = e.clientY - position.value.y

        window.addEventListener('mousemove', drag)
        window.addEventListener('mouseup', stopDrag)
    }
}

const drag = (e) => {
    position.value.x = e.clientX - startDragX
    position.value.y = e.clientY - startDragY
    emitPositionUpdate()
}

const stopDrag = () => {
    window.removeEventListener('mousemove', drag)
    window.removeEventListener('mouseup', stopDrag)
}

const emitPositionUpdate = () => {
    const newPosition = { x: position.value.x, y: position.value.y }
    emit('dragging', newPosition)  // Emit the updated position
}

const closeChart = () => {
    emit('close-chart')  // Emit close chart event
}

// Watch for changes in chart width and height, and resize chart accordingly
watch([width, height], () => {
    if (chartRef.value?.chart) {
        chartRef.value.chart.resize()
    }
})
</script>
