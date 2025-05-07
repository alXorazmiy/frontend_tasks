<template>
    <MainLayout>
      <div class="camera">
        <video ref="videoRef" autoplay playsinline ></video>
        <canvas ref="canvasRef" style="display: none;"></canvas>
      </div>
      <div class = "camera-button">
            <div class="circle" @click="getPhoto" ></div>
      </div>
    </MainLayout>
</template>

<script setup>

import MainLayout from '~/layouts/MainLayout.vue'

const videoRef = ref(null)
const canvasRef = ref(null)
const image = ref(null)

const getPhoto = () => {
    const video = videoRef.value
    const canvas = canvasRef.value
    if (video && canvas) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        const imageDataUrl = canvas.toDataURL('image/png')
        image.value = imageDataUrl

        const a = document.createElement('a')
        a.href = imageDataUrl
        a.download = 'image.png'
        a.click()
    }
}

let stream = null

onMounted(async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.value) {
            videoRef.value.srcObject = stream
        }
    } catch (err) {
        console.error("Kamera uchun ruxsat berilmagan:", err)
    }
})

onUnmounted(() => {

    if (stream) {
        stream.getTracks().forEach(track => track.stop())
    }
    if (videoRef.value) {
        videoRef.value.srcObject = null
    }
})



</script>
