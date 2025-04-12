
<template>
    <div class = "fixed flex justify-center align-center z-50 bg-[#1d2633] w-full  h-[70px] border-b border-[#232d3c]" >
        <div class="w-full mx-10  flex justify-between items-center">
            <img src="@/assets/images/logo.png"  class="max-w-[70px] h-[50px]" alt="" />

            <div class=" w-[400px] flex  justify-end items-center">
               
                <button class=  "w-[100px] h-[40px] rounded-md  border-[1px] border-[#232d3c] flex items-center justify-center" @click="$emit('open-modal')" >
                    <span class="text-white" >Add</span>
                </button>

                <div  class= "flex items-center ml-4"  >
                    <div class = "relative" >
                        <button class=  "mt-1"  @click = "event => showMenu = !showMenu">
                            <img src="@/assets/images/user1.jpeg" class = "rounded-full" width = "40"  alt="">
                        </button>

                        <div v-if = "showMenu" id = "PopupMenu" class = " absolute bg-[#263040] rounded-lg py-1.5 w-[200px] shadow-xl top-[43px] -right-2" >
                            <NuxtLink class = "flex items-center justify-start py-3 px-2 hover:bg-[#2c384a] cursor-pointer" @click = "$event => showMenu = false">
                                <Icon name = "ph:user"  size = "20" class = "text-white" />
                                <span class = "pl-2 font-regular text-sm text-white " >Profile</span>
                            </NuxtLink>
                            <NuxtLink class = "flex items-center justify-start py-3 px-1.5 hover:bg-[#2c384a] border-t cursor-pointer" @click = "$event =>showMenu = false">
                                <Icon name = "ic:outline-login"  size = "20" class = "text-white" />
                                <span class = "pl-2 font-regular text-sm text-white" >Log out</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script setup>

    let showMenu = ref(false)

</script>

