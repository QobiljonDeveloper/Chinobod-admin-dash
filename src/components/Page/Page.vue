<template>
  <div class="flex min-h-screen bg-cover bg-admin-dash">
    <div class="container mx-auto items-center mt-10 flex justify-between">
      <div>
        <div class="flex items-center space-x-4 mb-6">
          <img :src="accountImage" alt="Account Image" class="w-12 h-12 rounded-full" />
          <div>
            <p class="font-bold text-xl">{{ clientName }}</p>
            <p class="text-gray-600">Oshqozon osti bezi</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 mb-6">
          <button class="bg-[#022511] text-white px-6 py-3 rounded">A75 XONA</button>
          <button class="bg-[#022511] p-2 rounded" @click="openModal">
            <img src="@/assets/img/change.svg" alt="Change Icon" class="w-7 h-7" />
          </button>
        </div>

        <!-- Modal for Confirmation -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded shadow-lg">
            <h2 class="text-xl mb-4">Ishonchingiz komilmi</h2>
            <p class="mb-4">Telefon raqamingizni Call center ga yuvoraylikmi ?</p>
            <div class="flex justify-end space-x-2">
              <button class="bg-red-500 text-white px-4 py-2 rounded" @click="closeModal">
                No
              </button>
              <button class="bg-green-500 text-white px-4 py-2 rounded" @click="sendPhoneNumber">
                Yes
              </button>
            </div>
          </div>
        </div>

        <div v-if="showModalContact" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ContactModal @close="closeModalContact" />
        </div>

        <div class="space-y-2 flex flex-col">
          <router-link to="/Navigation" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Sanatoriya xaritasi va navigator
          </router-link>
          <router-link to="/Menu" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Ovqatlanish vaqtlari va menu
          </router-link>
          <router-link to="/AboutWe" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Biz haqimizda
          </router-link>
          <router-link to="/Solution" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kasallik va davolanish haqida batafsil
          </router-link>
          <button @click="openModalContact" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kontakt
          </button>
          <router-link to="/Book" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Elektron kutubxona
          </router-link>
        </div>
      </div>

      <div>
        <div class="countdown text-center mb-4 bg-[#022511] p-4 rounded-lg">
          <p class="text-white">Muolaja boshlanishiga qoldi:</p>
          <h2 class="text-2xl font-semibold text-white">{{ formattedTime }}</h2>
        </div>
        <router-link to="/Loading" class="block mt-3 w-full bg-[#022511] text-white py-2 rounded-lg text-center">
          Hamshiraga Habar yo'llang!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import ContactModal from '../ContactModal/ContactModal.vue'; // Adjust path as needed
import accountImage from '@/assets/img/user.png';
import getAllClients from '../SignIn/get'; // Adjust path as needed

export default {
  components: {
    ContactModal
  },
  data() {
    return {
      accountImage,
      treatmentTime: moment().add(1, 'hours').add(15, 'minutes').add(45, 'seconds'),
      timeRemaining: moment.duration(),
      showModal: false,
      showModalContact: false,
      clientName: 'Loading...', // Default value while fetching data
    };
  },
  computed: {
    formattedTime() {
      return this.timeRemaining
        ? moment.utc(this.timeRemaining.asMilliseconds()).format('HH:mm:ss')
        : '00:00:00';
    }
  },
  methods: {
    updateTime() {
      this.timeRemaining = moment.duration(this.treatmentTime.diff(moment()));
    },
    async fetchClientName() {
      try {
        const clients = await getAllClients();
        if (clients && clients.length > 0) {
          this.clientName = clients[0].name; // Assuming the first client's name
        } else {
          this.clientName = 'Client not found';
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
        this.clientName = 'Error loading client';
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    sendPhoneNumber() {
      const BOT_TOKEN = 'YOUR_BOT_TOKEN';
      const CHAT_ID = 'YOUR_CHAT_ID';
      const phoneNumber = '+998901234567'; // Replace with the actual phone number

      const message = `<b>Telefon raqam:</b> ${phoneNumber}`;

      axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
        .then(response => {
          console.log('Message sent:', response.data);
          alert('Phone number sent successfully!');
          this.closeModal();
        })
        .catch(error => {
          console.error('Error sending message:', error);
          alert('Failed to send phone number.');
        });
    },
    openModalContact() {
      this.showModalContact = true;
    },
    closeModalContact() {
      this.showModalContact = false;
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.fetchClientName(); // Fetch client name when component is mounted
  }
};
</script>

<style scoped>
.bg-admin-dash {
  background-image: url('@/assets/img/Admin-dash.png');
  background-size: cover;
  background-position: center;
}
</style>
