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
        <PolarArea ref="chartRef" :data="chartData" :options="chartOptions" />
        <div 
            class="absolute -bottom-2 right-0 cursor-se-resize" 
            @mouseenter="$event => resize_if = true" 
            @mouseleave="$event => resize_if = false" 
            @mousedown.prevent="startResize"
        >
            <Icon name="mdi:resize-bottom-right" class="text-white" size="30" />
        </div>
        <div 
            class="absolute top-1 right-1 bg-[#1d2633] flex items-center p-2 rounded-md cursor-pointer" 
            @click="$emit('close-chart')"
        >
            <Icon name="material-symbols:delete-rounded" class="text-[#f02c56]" size="24" />
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { PolarArea } from 'vue-chartjs'
    import { 
        Chart as ChartJS, 
        Title, 
        Tooltip, 
        Legend, 
        BarElement, 
        ArcElement,
        CategoryScale, 
        LinearScale,
        RadialLinearScale 
    } from 'chart.js'

    ChartJS.register(
        Title, 
        Tooltip, 
        Legend, 
        BarElement,
        ArcElement, 
        CategoryScale, 
        LinearScale,
        RadialLinearScale
    )

    const emit = defineEmits(['dragging', 'close-chart'])

    const props = defineProps({
        position: Object
    })

    const chartRef = ref(null)
    const width = ref(500)
    const height = ref(400)
    let resize_if = ref(false)

    const chartData = {
        labels: ['Red', 'Teal', 'Yellow', 'Grey', 'Blue'],
        datasets: [{
            label: '',
            data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1),
            backgroundColor: [
                '#f02c56',
                'teal',
                '#e89849',
                'rgb(201, 203, 207)',
                '#2195fb'
            ],
            borderWidth: 0
        }]
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            y: {
                ticks: { display: false },
                grid: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { display: false }
            },
            r: {
                beginAtZero: true,
                ticks: { display: false }
            }
        },
        plugins: { 
            legend: { display: false },
            tooltip: { enabled: true }
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

    watch([width, height], () => {
        if (chartRef.value?.chart) {
            chartRef.value.chart.resize()
        }
    })
</script>
