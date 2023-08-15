<script lang="ts">
import { ref, onMounted } from 'vue'

export default{
    name: 'floating-menu',
    setup(){
        const show = ref(false)
        const scollPos = ref(0)
        const menuItems = [
            {
                name: 'Home',
                route: '/',
                icon: ''
            },
            {
                name: 'Account',
                route: '/account',
                icon: ''
            },
            {
                name: 'Data',
                route: '/data',
                icon: ''
            }
        ]

        onMounted(() => {
            showMenu()
        })

        const showMenu = () =>{
            window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > scollPos.value) {
                // downscroll code
                show.value = false
                console.log('down')
            } else if (st < scollPos.value) {
                // upscroll code
                show.value = true
                console.log('Up')
            } // else was horizontal scroll
                scollPos.value = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }, false);
        }

        return {
            menuItems,
            show
        }
    }
}
</script>

<template>
    <nav class="floating-menu"
    :class="{'active': show}"
    >
        <ul>
            <li
            v-for="(item, index) in menuItems"
            :key="index"
            >
                <router-link
                :to="item.route"
                >{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>
 .floating-menu{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    background-color: #ffffff;
    transform: translateY(100%);
    transition: transform .4s ease-in-out;
 }

 .floating-menu.active{
    transform: translateY(0);
 }

 .floating-menu ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
 }

 .floating-menu ul a{
    text-decoration: none;
 }
</style>