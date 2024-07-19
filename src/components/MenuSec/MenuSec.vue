<template>
  <div class="flex flex-col items-center">
    <div class="container flex flex-col items-center pt-16 pb-5 px-4">
      <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 class="text-3xl font-black text-[#14532D]">Nonushta Menyusi :</h1>
          <div class="countdown text-center p-4 flex items-center gap-3">
            <h1 class="text-2xl font-medium text-[#14532D]">Nonushtagacha Vaqt qoldi :</h1>
            <h2 class="text-2xl font-semibold text-black">{{ formattedBreakfastTime }}</h2>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5 mt-10">
          <img src="@/assets/img/tuxum.png" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/kasha.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/kotlet.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/gar.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/soup.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/kat.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-16 w-full">
        <div class="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 class="text-3xl font-black text-[#14532D]">Tushlik Menyusi :</h1>
          <div class="countdown text-center p-4 flex items-center gap-3">
            <h1 class="text-2xl font-medium text-[#14532D]">Tushlikgacha Vaqt qoldi :</h1>
            <h2 class="text-2xl font-semibold text-black">{{ formattedLunchTime }}</h2>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5 mt-10">
          <img src="@/assets/img/bish.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/grechka.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/gulyash.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/manti.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/mastava.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/shorva.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-16 w-full">
        <div class="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 class="text-3xl font-black text-[#14532D]">Qisqa Taomlanish Menyusi :</h1>
          <div class="countdown text-center p-4 flex items-center gap-3">
            <h1 class="text-2xl font-medium text-[#14532D]">Qisqa Taomlanishgacha Vaqt qoldi :</h1>
            <h2 class="text-2xl font-semibold text-black">{{ formattedSnackTime }}</h2>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5 mt-10">
          <img src="@/assets/img/zaytun.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/tovu.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/sezar.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/pirog.jpeg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/malina.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/asal.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-16 w-full">
        <div class="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 class="text-3xl font-black text-[#14532D]">Kechki taom Menyusi :</h1>
          <div class="countdown text-center p-4 flex items-center gap-3">
            <h1 class="text-2xl font-medium text-[#14532D]">Kechki taomgacha Vaqt qoldi :</h1>
            <h2 class="text-2xl font-semibold text-black">{{ formattedDinnerTime }}</h2>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5 mt-10">
          <img src="@/assets/img/pomidor.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/baliq.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/kartorfel.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/non.png" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/gre.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
          <img src="@/assets/img/somsa.jpg" alt="" class="w-[250px] md:w-[370px] h-[250px] md:h-[370px] object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      breakfastTime: this.getMealTime(8, 0),
      lunchTime: this.getMealTime(13, 0),
      dinnerTime: this.getMealTime(18, 0),
      snackTime: this.getMealTime(16, 0),
      timeRemaining: '',
    };
  },
  computed: {
    formattedBreakfastTime() {
      return this.getTimeRemaining(this.breakfastTime);
    },
    formattedLunchTime() {
      return this.getTimeRemaining(this.lunchTime);
    },
    formattedDinnerTime() {
      return this.getTimeRemaining(this.dinnerTime);
    },
    formattedSnackTime() {
      return this.getTimeRemaining(this.snackTime);
    },
  },
  methods: {
    getMealTime(hour, minute) {
      const now = moment();
      let mealTime = moment().set({ hour, minute, second: 0, millisecond: 0 });
      if (now.isAfter(mealTime)) {
        mealTime.add(1, 'day');
      }
      return mealTime;
    },
    getTimeRemaining(mealTime) {
      const now = moment();
      const duration = moment.duration(mealTime.diff(now));
      return duration.asMilliseconds() > 0 ? moment.utc(duration.asMilliseconds()).format('HH:mm:ss') : '00:00:00';
    },
    updateTimes() {
      this.breakfastTime = this.getMealTime(8, 0);
      this.lunchTime = this.getMealTime(13, 0);
      this.dinnerTime = this.getMealTime(18, 0);
      this.snackTime = this.getMealTime(16, 0);
    },
  },
  mounted() {
    this.updateTimes();
    setInterval(this.updateTimes, 1000);
  },
};
</script>


