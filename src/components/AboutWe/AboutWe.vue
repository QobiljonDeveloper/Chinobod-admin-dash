<template>
    <div class="bg min-h-screen items-center justify-center">

        <swiper class="swiper !container !py-10" :modules="modules" :slides-per-view="4" :free-mode="true"
            :pagination="{ clickable: true }" :autoplay="true" :delay="1000">
            <swiper-slide class="slide !flex !justify-center" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" alt="" class="fixed-width-img" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="batafsil container">
            <p class="text-[#4E6B20] text-base font-bold">
                CHINOBOD" SANATORIYSI - ovqat hazm qilish aʼzolari (meʼda, ichak,
                jigar
                va oʻt pufagi) kasalliklarini davolashga
                ixtisoslashgan tibbiy sogʻlomlashtirish maskani. Toshkentning Yunusobod tumanida joylashgan. Sanatoriy
                hududi
                1938-yilda paxta tozalash zdlari ishchilarining dam olish zonasi boʻlgan, 1941-yil evakuatsiya qilingan
                gospital
                joylashtirilgan, 1946-yil sanatoriyga (75 oʻrinli) aylantirilgan. "CH." s.ning hozirgi maydoni 19 ga,
                atrofi
                mevali
                va manzarali daraxtlar bilan koʻkalamzorlashtirilgan. 1963-yil sanatoriy hududida 1554 m chuqurliqsan
                burgʻi
                qudugʻi
                orqali Toshkent mineral suvi chiqarilgan. Sanatoriy 370 oʻrinli, unda davolash va diagnostika
                boʻlimlari,
                jumladan,
                shifobaxsh mineral suv, balchiq, ozokerit va elektr bilan davolash boʻlimlari, badan tarbiya zali,
                aerosolyariy,
                ingalyatoriy, rentgen, rektoromonoskopiya, stomatologiya xonalari, biokimyo, bakteriologiya va klinik
                lablari bor.
                Mineral suvdan asosan vannalar uchun, ichish, ichaklarni chayish, tyubaj, dush, suv osti massaji
                qilishda
                foydalaniladi. "CH."s. meʼda va 12 barmoq ichakni tekshiradigan zamonaviy tibbiy tekshiruv asboblari
                bilan
                jihozlangan. 1997—98 yildan sanatoriyning davolash ixtisosligi kengaytirildi: qandli diabet,
                ginekologiya,
                urologiya, andrologiya boʻlimlari faoliyat koʻrsata boshlai. 1999-yildan fol akupunktura diagnostikasi
                joriy
                etiddi, bunda biologik faol nuqtalar (BFN) va kompyuter yordamida aniq tashxis qoʻyiladi.

                Bemorlarga tabiiy mineral suvdan tashqari, doridarmonlar, shifobaxsh giyohlardan tayyorlangan
                damlamalar,
                parhez
                ovqatlar va boshqa beriladi. Yiliga 6000 kishi davolanadi (2004).

                Sanatoriyda 370 oʻringa moʻljallangan yotoq korpuslari (bir va ikki oʻrinli), 2 ta oilaviy kottej, klub,
                kutubxona,
                sport maydonchalari bor. "CH."s.da bekamu kust davolanish, marokli dam olish uchun barcha qulayliklar va
                orombaxsh
                mikroiqlim mavjud.
            </p>
        </div>
        <div class="flex justify-end container">
            <router-link to="/Page" class="self-start bg-[#022511] py-2 px-6 ml-10 mb-4 rounded-lg">
                <img src="../../assets/img/exit.png" alt="Back">
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
        SwiperSlide
    },
    setup() {
        const slides = [
            { image: hotelRoom1 },
            { image: hotelRoom2 },
            { image: hotelRoom3 },
            { image: hotelRoom4 },
            { image: hotelRoom5 }
        ];

        return {
            slides
        };
    }
});
</script>

  
<style scoped>
.fixed-width-img {
    width: 400px !important;
    height: 250px !important;
    object-fit: cover;
}
</style>
  