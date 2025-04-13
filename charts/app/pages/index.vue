<template>
    <div>
        <Navbar @open-modal="showModal = true" />
        <div class="w-full h-[100vh] bg-[#1d2633] pt-[80px] overflow-y-scroll">
            <div class="mt-2">

                <div class="relative" v-for="(chart, index) in Charts_list" >
                    <div v-if="chart.warning"  class="absolute z-100 bg-[#f02c5663]" :style="{ top: chart.position.y  -20  + 'px', left: chart.position.x - 20 + 'px', height: chart.size.height + 40 + 'px', width: chart.size.width + 40 + 'px', zIndex:100}"></div>
                    <component 
                        :key="chart.id" 
                        :is="getChartComponent(chart.type)" 
                        :style="{ top: chart.position.y  + 'px', left: chart.position.x  + 'px', height: chart.size.height  + 'px', width: chart.size.width  + 'px', zIndex: chart.id}"
                        @close-chart="closeChart(chart.id)"
                        @dragging="updatePosition(chart.id, $event)"
                        @resize="emitSizeUpdate(chart.id, $event)"
                    />
                </div>

                
            </div>
        </div>
        
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click.self="showModal = false">
            <div class="bg-[#263040] rounded p-6 w-80">
                <h2 class="text-lg font-semibold mb-4 text-white">Select a chart to add</h2>
                <ul class="space-y-2">
                    <li><button @click="addChart('bar')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Bar Chart</button></li>
                    <li><button @click="addChart('line')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Line Chart</button></li>
                    <li><button @click="addChart('pie')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Pie Chart</button></li>
                    <li><button @click="addChart('radar')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Radar Chart</button></li>
                    <li><button @click="addChart('polar')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Polar Area Chart</button></li>
                    <li><button @click="addChart('image')" class="w-full text-left text-white px-3 py-2 bg-[#1d2633] rounded">Image</button></li>
                </ul>
                <div class="flex justify-end">
                    <button @click="showModal = false" class="mt-4 px-4 py-2 bg-[#f02c56] text-white rounded">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from "@/components/Navbar.vue"
import BarChart from  "@/components/dashboard/BarChart.vue"
import LineChart from  "@/components/dashboard/LineChart.vue"
import PieChart from  "@/components/dashboard/PieChart.vue"
import RadarChart from  "@/components/dashboard/RadarChart.vue"
import PolarAreaChart from  "@/components/dashboard/PolarAreaChart.vue"
import Image from  "@/components/dashboard/Image.vue"

let showModal = ref(false)
const Charts_list = ref([])

let chartId = 0

const getChartComponent = (type) => {
    switch (type) {
        case 'bar': return BarChart
        case 'line': return LineChart
        case 'pie': return PieChart
        case 'radar': return RadarChart
        case 'polar': return PolarAreaChart
        case 'image': return Image
        default: return null
    }
}

const addChart = (type) => {
    // X o'qi bo'yicha eng oxirgi chartning o'ng tomoni
    const lastChartRightEdge = Math.max(
        ...Charts_list.value.map(chart => chart.position.y + chart.size.height)
    )

    
    const newX = 10
    const newY = lastChartRightEdge + 50

    Charts_list.value.push({
        id: chartId++,
        type,
        position: { x: newX, y: newY },
        size: { height: 400, width: 500 },
        zIndex: 1,
        warning: false
    })

    showModal.value = false
}

const closeChart = (id) => {
    Charts_list.value = Charts_list.value.filter(chart => chart.id !== id)
}
const updatePosition = (id, newPosition) => {
    const chart = Charts_list.value.find(chart => chart.id === id)
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const isColliding = (a, b) => {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        )
    }

    newPosition.x = Math.max(0, Math.min(newPosition.x, screenWidth - chart.size.width))
    newPosition.y = Math.max(0, Math.min(newPosition.y, screenHeight - chart.size.height))

    for (let i = 0; i < Charts_list.value.length; i++) {
        const item = Charts_list.value[i]
        if (chart.id !== item.id) {
            if (isColliding({ x: newPosition.x - 20 , y: newPosition.y - 20, width: chart.size.width + 40, height: chart.size.height + 40 },{ x: item.position.x, y: item.position.y, width: item.size.width, height: item.size.height })) {
                item.warning = true
                return 
            }
            else {
                item.warning = false
            }
        }
    }

    if (chart) {
        chart.position = newPosition
    }
}

const emitSizeUpdate = (id, newSize) => {
    const chart = Charts_list.value.find(chart => chart.id === id)
    if (!chart) return

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const newRect = {
        x: chart.position.x - 20,
        y: chart.position.y - 20,
        width: newSize.width + 40,
        height: newSize.height + 40
    }

    newRect.x = Math.max(0, Math.min(newRect.x, screenWidth - newRect.width))
    newRect.y = Math.max(0, Math.min(newRect.y, screenHeight - newRect.height))

    for (const item of Charts_list.value) {
        if (item.id !== id) {
            const otherRect = {
                x: item.position.x,
                y: item.position.y,
                width: item.size.width,
                height: item.size.height
            }

            const isColliding = (
                newRect.x < otherRect.x + otherRect.width &&
                newRect.x + newRect.width > otherRect.x &&
                newRect.y < otherRect.y + otherRect.height &&
                newRect.y + newRect.height > otherRect.y
            )

            if (isColliding) {
                item.warning = true
                return 
            } else {
                item.warning = false
            }
        }
    }

    chart.size = newSize
}


</script>
