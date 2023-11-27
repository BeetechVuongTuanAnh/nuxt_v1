<template>
    <div class="Main">
        <div>index page</div>
        <div>
            <Alert />
            <Profile />
        </div>
        <h3>Hello Nuxt 3</h3>
        <img src="~assets/images/1.png" />
        <div>
            Counter: {{ counter }}
            <button @click="counter++">
                +
            </button>
            <button @click="counter--">
                -
            </button>
        </div>
        <div>{{ pending ? "Loading" : products }}</div>
    </div>
</template>

<script setup lang="ts">
const { sayHello } = useUtils();
const { $sayBye } = useNuxtApp();
const counter = useState('counter', () => Math.round(Math.random() * 1000))
sayHello();
$sayBye("VTA");

const { data: products, pending } = await useLazyFetch("/api/products");

</script>

<style scoped></style>