<template>
    <div class="good-add-view">
        <GoodAdd @result="handleResult" @error="handleError" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import GoodAdd from '@/components/goodsOperate/GoodAdd.vue';

const result = ref(null)
const errorMessage = ref(null)
const handleResult = (data) => {
    result.value = data.message;
}

const handleError = (error) => {
    errorMessage.value = error;
}

</script>


