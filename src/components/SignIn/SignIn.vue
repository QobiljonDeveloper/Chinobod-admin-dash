
<template>
  <div class="flex justify-center min-h-screen bg-admin-dash bg-cover object-cover items-center">
    <div class="bg-green-900 p-8 rounded-lg shadow-md text-white max-w-md w-full h-[300px] mt-10">
      <h2 class="text-center text-lg mb-4">PHONE NUMBER VA PAROLINGIZNI KIRITING:</h2>
      <form @submit.prevent="submitForm">
        <div class="flex gap-10 mt-10">
          <div class="mb-4">
            <input v-model="login" type="tel" placeholder="+998XXXXXXXXX"
              class="w-full p-3 rounded bg-white text-black placeholder-gray-500" pattern="[+]{0,1}[0-9]{12,13}"
              maxlength="13" required @input="formatPhoneNumber($event)" />
          </div>
          <div class="mb-4 relative">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="PASSWORD"
              class="w-full p-3 rounded bg-white text-black placeholder-gray-500" required />
            <button type="button" @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-black">
              <span v-if="showPassword">Hide</span>
              <span v-else>Show</span>
            </button>
          </div>
        </div>
        <button type="submit" class="w-full py-3 bg-green-500 rounded hover:bg-green-600 transition duration-300"
          :class="{ 'bg-green-500': !blocked, 'bg-gray-400 cursor-not-allowed': blocked }" :disabled="blocked">
          TASDIQLASH
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import getAllClients from './get.js';

export default {
  data() {
    return {
      login: '+998',
      password: '',
      showPassword: false,
      attempts: 0,
      maxAttempts: 5,
      blocked: false,
    };
  },
  methods: {
    async submitForm() {
      // Check if the user is already blocked
      if (this.blocked) {
        alert('Your account is blocked. Please try again later.');
        return;
      }

      // Validate login and password
      if (!this.login || !this.password) {
        alert('Please enter both phone number and password.');
        return;
      }

      try {
        const clients = await getAllClients();
        console.log(clients); // Log the list of clients to the console

        const loggedInAdmin = clients.find(admin => admin.phone === this.login && admin.password === this.password);

        if (loggedInAdmin) {
          this.attempts = 0;

          localStorage.setItem('loggedInAdmin', JSON.stringify(loggedInAdmin));
          alert(`Welcome, ${loggedInAdmin.name}!`);
          this.$router.push('/Page');
        } else {
          this.attempts++;

          if (this.attempts >= this.maxAttempts) {
            this.blocked = true;
            setTimeout(() => {
              this.blocked = false; // Unblock after 1 day (you can adjust the timing as needed)
              this.attempts = 0; // Reset attempts after unblocking
            }, 86400000); // 1 day in milliseconds
          }

          alert('Invalid phone number or password.');
        }
      } catch (error) {
        console.error('Error logging in:', error.message);
        alert('Error logging in. Please try again.');
      }
    },
    formatPhoneNumber(event) {
      // Ensure the phone number always starts with '+998'
      if (!event.target.value.startsWith('+998')) {
        event.target.value = '+998';
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>
