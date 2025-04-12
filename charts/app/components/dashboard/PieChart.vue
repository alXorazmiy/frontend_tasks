<template>
    <div 
        class="relative bg-[#263040]  p-4  cursor-pointer"
        :style="{ 
            width: width + 'px', 
            height: height + 'px', 
            left: position.x + 'px', 
            top: position.y + 'px',
            position: 'absolute' 
        }" 
        @mousedown="startDrag"
    >
        <Doughnut  ref="chartRef" :data="chartData" :options="chartOptions" />
        <div class=" absolute -bottom-2 right-0 cursor-se-resize" @mouseenter="$event => resize_if = true"  @mouseleave="$event => resize_if = false"   @mousedown.prevent="startResize">
            <Icon name = "mdi:resize-bottom-right" class = "text-white" size = "30" />
        </div>
        <div class=" absolute top-1 right-1 bg-[#1d2633] flex items-center p-2 rounded-md cursor-pointer" @click = "$emit('close-chart')" >
            <Icon name = "material-symbols:delete-rounded" class = "text-[#f02c56]" size = "24" />
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { Doughnut } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

    // Chart.js elementlarini ro'yxatdan o'tkazish
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

    
    const chartRef = ref(null)
    const width = ref(400)
    const height = ref(400)
    const position = ref({ x: 0, y: 0 })
    let resize_if = ref(false)

    const chartData = {
        labels: [],
        datasets: [{
            data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1),
            backgroundColor: ['#f02c56', '#e89849', '#2195fb'],
            borderWidth: 0
        }]
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: { position: 'top' }
        }
    }

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

    let startDragX = 0, startDragY = 0
    const startDrag = (e) => {
        if (resize_if.value == false) {
            startDragX = e.clientX - position.value.x
            startDragY = e.clientY - position.value.y

            window.addEventListener('mousemove', drag)
            window.addEventListener('mouseup', stopDrag)
        }
    }

    const drag = (e) => {
        position.value.x = e.clientX - startDragX
        position.value.y = e.clientY - startDragY
    }

    const stopDrag = () => {
        window.removeEventListener('mousemove', drag)
        window.removeEventListener('mouseup', stopDrag)
    }

    watch([width, height], () => {
        if (chartRef.value?.chart) {
            chartRef.value.chart.resize()
        }
    })
</script>
