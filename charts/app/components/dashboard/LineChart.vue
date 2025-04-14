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
        <Line ref="chartRef" :data="chartData" :options="chartOptions" />
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
    import { ref, watch } from 'vue'
    import { Line } from 'vue-chartjs'
    import { 
        Chart as ChartJS, 
        Title, 
        Tooltip, 
        Legend, 
        LineElement, 
        PointElement, 
        CategoryScale, 
        LinearScale 
    } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

    const props = defineProps({
        position: Object
    })

    const emit = defineEmits(['dragging', 'close-chart'])

    const chartRef = ref(null)
    const width = ref(500)
    const height = ref(300)
    const resize_if = ref(false)

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sem', 'Oct', 'Nov', 'Dec']
    const dataValues = Array.from({ length: 12 }, () => Math.floor(Math.random() * 20) + 1)

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
        emitSizeUpdate()
    }

    const stopResize = () => {
        window.removeEventListener('mousemove', resize)
        window.removeEventListener('mouseup', stopResize)
    }

    let startDragX = 0, startDragY = 0

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

    watch([width, height], () => {
        if (chartRef.value?.chart) {
            chartRef.value.chart.resize()
        }
    })
</script>
