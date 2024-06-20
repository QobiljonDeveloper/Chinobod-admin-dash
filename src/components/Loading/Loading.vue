<template>
  <div class="bg-image-1 relative flex flex-col items-center justify-center h-screen">
    <div class="w-full flex justify-start pt-4 pl-4">
      <router-link to="/Page" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
        <img src="../../assets/img/exit.png" alt="Back">
      </router-link>
    </div>
    <ol class="flex items-center w-full max-w-4xl mx-auto mt-5">
      <li v-for="(step, index) in steps" :key="index" :class="{
        'w-full': true,
        'flex': true,
        'items-center': true,
        'after:content-[\'\']': true,
        'after:w-full': index < steps.length - 1,
        'after:h-1': index < steps.length - 1,
        'after:border-b': index < steps.length - 1,
        'after:border-4': index < steps.length - 1,
        'after:inline-block': index < steps.length - 1,
        'after:border-green-700': index < activeStepIndex,
        'after:border-white': index >= activeStepIndex,
        'bg-image-2': index === 0,
        'bg-image-3': index === 1,
      }">
        <span class="flex items-center justify-center w-5 h-5 rounded-full shrink-0" :class="{
          'bg-green-700': index <= activeStepIndex,
          'bg-white': index > activeStepIndex,
          'bg-image-2': index === 0 && index < activeStepIndex,
          'bg-image-3': index === 1 && index < activeStepIndex,
          'bg-image-4': index === 2 && index < activeStepIndex,
        }"></span>
      </li>
    </ol>
    <div class="text-center flex justify-center items-center flex-col mt-5">
      <h1 v-if="activeStepIndex === 0" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Xabar yuborildi, hamshira tasdiqlashi kutilmoqda
      </h1>
      <h1 v-else-if="activeStepIndex === 1" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Hamshira xabaringizni ko'rdi va tasdiqladi, Iltimos biroz kuting!
      </h1>
      <h1 v-else-if="activeStepIndex === 2" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Hamshira yetib keldi. Servisni baholang
      </h1>
      <img src="@/assets/img/dock.png" alt="Dock" class="w-[900px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      activeStepIndex: 0,
      steps: ['Step 1', 'Step 2', 'Step 3']
    };
  },
  mounted() {
    setInterval(() => {
      this.activeStepIndex = (this.activeStepIndex + 1) % this.steps.length;
    }, 10000);  // Adjusted to 10 seconds for demonstration, change as needed
  }
};
</script>

<style scoped>
.bg-image-1 {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/bg.png');
  background-size: cover;
  background-position: center;
}

li:last-child .after\:border-b {
  display: none;
}
</style>
