



<template>
    <div class = "navbar">
        <div class = "container navbar-items" >
            <div class = "logo" >
                <NuxtLink to="/" ><img src="@/assets/images/icon-green.svg" alt=""></NuxtLink>
            </div>
            <div class = "links" >
                <NuxtLink to="/" >Tree</NuxtLink>
                <NuxtLink to="/" >Table</NuxtLink>
                <NuxtLink to="/" >Camera</NuxtLink>
            </div>
            <div class = "actions" >
                <div class="theme" @click = "setTheme">  
                    <div class="theme-box" :class = "isDark ? 'darkmode' : ''">
                        <div class = "icon-background">
                            <Icon v-if="!isDark" name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" class = "sun"  />
                            <Icon v-else name="line-md:moon-filled-loop" class = "moon"   />
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const isDark = ref(false)

const setTheme = ()=>{
    console.log(isDark.value)
    if(isDark.value) {
        localStorage.setItem("thememode", 'light')
        document.body.classList.remove("dark-mode-variables")
        isDark.value = false

    } else {
        localStorage.setItem("thememode", 'dark')
        document.body.classList.add("dark-mode-variables")
        isDark.value = true
    }
}

onMounted(()=>{
    try{
        let thememode = localStorage.getItem("thememode")
        console.log(thememode)
        if (thememode == 'light'){
            isDark.value = false
            document.body.classList.remove("dark-mode-variables")
        }
        if (thememode == 'dark') {
            isDark.value = true
            document.body.classList.add("dark-mode-variables")
        }
    }
    catch {

    }
})

</script>

