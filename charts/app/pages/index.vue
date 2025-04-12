<template>
    <div>
        <Navbar @open-modal="showModal = true" />
        <div class="w-full h-[100vh] bg-[#1d2633] pt-[80px]">
            <div class="mt-10 flex flex-wrap gap-4 relative">
                <component 
                    v-for="(chart, index) in Charts_list" 
                    :key="chart.id" 
                    :is="getChartComponent(chart.type)" 
                    :style="{ top: chart.position.y + 'px', left: chart.position.x + 'px', height: chart.size.height + 'px', width: chart.size.width + 'px'}"
                    @close-chart="closeChart(chart.id)"
                    @dragging="updatePosition(chart.id, $event)"
                    @resize="emitSizeUpdate(chart.id, $event)"
                />
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
        default: return null
    }
}

const addChart = (type) => {
    Charts_list.value.push({
        id: chartId++,
        type,
        position: { x: 0, y: 0 },
        size : {height: 400, width: 500},
        zIndex: 1,  
    })
    showModal.value = false 
}

const closeChart = (id) => {
    Charts_list.value = Charts_list.value.filter(chart => chart.id !== id)
}

const updatePosition = (id, newPosition) => {
    const chart = Charts_list.value.find(chart => chart.id === id)
    if (chart) {
        chart.position = newPosition
    }
}

const emitSizeUpdate = (id, newSize) => {
    const chart = Charts_list.value.find(chart => chart.id === id)
    if (chart) {
        console.log(newSize)
        chart.size = newSize
    }
}

</script>
