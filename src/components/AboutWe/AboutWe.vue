<template>
  <div class="bg min-h-screen flex flex-col items-center justify-center">
    <swiper
      class="swiper !container !py-10"
      :modules="modules"
      :slides-per-view="getSlidesPerView()"
      :free-mode="true"
      :pagination="{ clickable: true }"
      :autoplay="true"
      :delay="1000"
    >
      <swiper-slide class="slide !flex !justify-center" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="" class="fixed-width-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="batafsil container px-4">
      <p class="text-[#4E6B20] text-base font-bold">
        "CHINOBOD" SANATORIYSI - ovqat hazm qilish a'zolari (me'da, ichak,
        jigar va o't pufagi) kasalliklarini davolashga ixtisoslashgan tibbiy sog'lomlashtirish maskani. Toshkentning Yunusobod tumanida joylashgan. Sanatoriy hududi 1938-yilda paxta tozalash zdlari ishchilarining dam olish zonasi bo'lgan, 1941-yil evakuatsiya qilingan gospital joylashtirilgan, 1946-yil sanatoriyga (75 o'rinli) aylantirilgan. "CH." s.ning hozirgi maydoni 19 ga, atrofi mevali va manzarali daraxtlar bilan ko'kalamzorlashtirilgan. 1963-yil sanatoriy hududida 1554 m chuqurliqsan burg'i qudug'i orqali Toshkent mineral suvi chiqarilgan. Sanatoriy 370 o'rinli, unda davolash va diagnostika bo'limlari, jumladan, shifobaxsh mineral suv, balchiq, ozokerit va elektr bilan davolash bo'limlari, badan tarbiya zali, aerosolyariy, ingalyatoriy, rentgen, rektoromonoskopiya, stomatologiya xonalari, biokimyo, bakteriologiya va klinik lablari bor. Mineral suvdan asosan vannalar uchun, ichish, ichaklarni chayish, tyubaj, dush, suv osti massaji qilishda foydalaniladi. "CH."s. me'da va 12 barmoq ichakni tekshiradigan zamonaviy tibbiy tekshiruv asboblari bilan jihozlangan. 1997—98 yildan sanatoriyning davolash ixtisosligi kengaytirildi: qandli diabet, ginekologiya, urologiya, andrologiya bo'limlari faoliyat ko'rsata boshlai. 1999-yildan fol akupunktura diagnostikasi joriy etildi, bunda biologik faol nuqtalar (BFN) va kompyuter yordamida aniq tashxis qo'yiladi. Bemorlarga tabiiy mineral suvdan tashqari, doridarmonlar, shifobaxsh giyohlardan tayyorlangan damlamalar, parhez ovqatlar va boshqa beriladi. Yiliga 6000 kishi davolanadi (2004). Sanatoriyda 370 o'ringa mo'ljallangan yotoq korpuslari (bir va ikki o'rinli), 2 ta oilaviy kottej, klub, kutubxona, sport maydonchalari bor. "CH."s.da bekamu kust davolanish, marokli dam olish uchun barcha qulayliklar va orombaxsh mikroiqlim mavjud.
      </p>
    </div>
    <div class="flex justify-end container px-4">
      <router-link to="/Page" class="self-start bg-[#022511] py-2 px-6 ml-10 mb-4 rounded-lg">
        <img src="../../assets/img/exit.png" alt="Back" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import hotelRoom1 from '@/assets/img/kitchen.jpg';
import hotelRoom2 from '@/assets/img/land.jpg';
import hotelRoom3 from '@/assets/img/room.jpg';
import hotelRoom4 from '@/assets/img/dav.jpg';
import hotelRoom5 from '@/assets/img/pool.jpg';

export default defineComponent({
  name: 'SwiperExampleFreeMode',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      { image: hotelRoom1 },
      { image: hotelRoom2 },
      { image: hotelRoom3 },
      { image: hotelRoom4 },
      { image: hotelRoom5 },
    ];

    const getSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      if (width >= 640) return 2;
      return 1;
    };

    return {
      slides,
      getSlidesPerView,
    };
  },
});
</script>

<style scoped>
.fixed-width-img {
  width: 100% !important;
  height: 250px !important;
  object-fit: cover;
}

.batafsil p {
  padding: 1rem;
  text-align: justify;
}

@media (min-width: 1024px) {
  .fixed-width-img {
    width: 400px !important;
    height: 250px !important;
  }
}
</style>
