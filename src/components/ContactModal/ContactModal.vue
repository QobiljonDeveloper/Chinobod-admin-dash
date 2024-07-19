<template>
  <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div class="modal-container p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">CONTACT</h2>
      <div class="rating flex mb-4">
        <span class="star text-4xl md:text-5xl lg:text-6xl text-gray-400 cursor-pointer mr-1" :class="{ 'text-yellow-500': rating >= 1 }" @click="updateStars(1)">
          &#9734;
        </span>
        <span class="star text-4xl md:text-5xl lg:text-6xl text-gray-400 cursor-pointer mr-1" :class="{ 'text-yellow-500': rating >= 2 }" @click="updateStars(2)">
          &#9734;
        </span>
        <span class="star text-4xl md:text-5xl lg:text-6xl text-gray-400 cursor-pointer mr-1" :class="{ 'text-yellow-500': rating >= 3 }" @click="updateStars(3)">
          &#9734;
        </span>
        <span class="star text-4xl md:text-5xl lg:text-6xl text-gray-400 cursor-pointer mr-1" :class="{ 'text-yellow-500': rating >= 4 }" @click="updateStars(4)">
          &#9734;
        </span>
        <span class="star text-4xl md:text-5xl lg:text-6xl text-gray-400 cursor-pointer" :class="{ 'text-yellow-500': rating >= 5 }" @click="updateStars(5)">
          &#9734;
        </span>
      </div>
      <textarea v-model="feedback"
        class="w-full h-24 md:h-32 lg:h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
        placeholder="Enter your feedback here"></textarea>
      <div class="flex justify-end">
        <button @click="closeModal"
          class="text-gray-700 px-4 py-2 rounded-md mr-2 transition-colors duration-300 !bg-[#22C55E]">
          Close
        </button>
        <button @click="sendFeedback"
          class="text-white px-4 py-2 rounded-md transition-colors duration-300 !bg-[#022511]">
          Send
        </button>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      rating: 0,
      feedback: ''
    };
  },
  methods: {
    updateStars(rating) {
      this.rating = rating;
    },
    closeModal() {
      this.$emit('close');
    },
    sendFeedback() {
      const message = `Rating: ${this.rating}\nFeedback: ${this.feedback}`;

      const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
      const CHAT_ID = 'YOUR_CHAT_ID_HERE';

      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: message
        })
        .then((response) => {
          console.log('Message sent:', response.data);
          this.closeModal();
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    }
  }
};
</script>
<style scoped>
.modal-container {
  width: 90%;
  max-width: 600px;
  padding: 1rem;
}

.star {
  cursor: pointer;
}

@media (min-width: 768px) {
  .modal-container {
    width: 70%;
  }

  .star {
    font-size: 5rem;
  }

  textarea {
    height: 30vh;
  }
}

@media (min-width: 1024px) {
  .modal-container {
    width: 60%;
  }

  .star {
    font-size: 6rem;
  }

  textarea {
    height: 40vh;
  }
}

@media (min-width: 1440px) {
  .modal-container {
    width: 50%;
  }

  .star {
    font-size: 7rem;
  }

  textarea {
    height: 50vh;
  }
}
</style>
