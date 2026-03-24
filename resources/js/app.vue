<!-- resources/js/App.vue -->
<template>
    <router-view></router-view>


    <div class="container">
        <h1>مرحباً بك في لارافل 11 مع Vue 3!</h1>
        <p>إذا كنت ترى هذه الرسالة، فهذا يعني أن الإعداد تم بنجاح.</p>
        <button @click="count++" class="btn">العداد هو: {{ count }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
.container { text-align: center; margin-top: 50px; font-family: sans-serif; }
.btn { padding: 10px 20px; background-color: #42b983; color: white; border: none; border-radius: 5px; cursor: pointer; }
</style>
