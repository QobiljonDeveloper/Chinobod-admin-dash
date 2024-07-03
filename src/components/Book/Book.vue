<template>
  <div class="bg min-h-screen flex">
    <div class=" container p-4">
      <h1 class="text-3xl font-bold mb-4">Books</h1>
      <div class="mb-4 flex justify-between">
        <label for="language" class="block text-lg font-medium mb-2">Choose a Language:</label>
        <select id="language" v-model="selectedLanguage" @change="fetchBooks" class="p-2 border rounded">
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>

      <div v-if="books[selectedLanguage].length > 0">
        <h2 class="text-xl font-bold mb-2">Books in {{ selectedLanguage.toUpperCase() }}</h2>
        <ul class="books-list">
          <li v-for="book in books[selectedLanguage]" :key="book.title" class="book-item">
            <img :src="book.image" alt="Book Cover" class="book-image" />
            <div class="book-details">
              <p class="book-title">{{ book.title }}</p>
              <p class="book-author">Author: {{ book.author }}</p>
              <a :href="book.pdf" class="book-download">Show PDF</a>
              <a :href="book.pdf" class="book-download ml-4" download>Download PDF</a>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No books available in {{ selectedLanguage.toUpperCase() }}</p>
      </div>
      <div class="flex justify-end ">
            <router-link to="/Page" class="self-start bg-[#022511] py-2 px-6 ml-10 mb-4 rounded-lg">
                <img src="../../assets/img/exit.png" alt="Back">
            </router-link>
        </div>
    </div>
1
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedLanguage: 'ru', // Default selected language
      books: {
        // Object to hold fetched books by language
        ru: [],
        en: [],
        uz: []
      }
    }
  },
  methods: {
    fetchBooks() {
      axios
        .get(``)
        .then((response) => {
          this.books = response.data // Assuming response.data is directly the object with language keys
          console.log(this.books) // Check the structure of this.books if needed
        })
        .catch((error) => {
          console.error('Error fetching books:', error)
        })
    }
  },
  mounted() {
    // Fetch books when the component is mounted
    this.fetchBooks()
  }
}
</script>

<style scoped>
.books-list {
  list-style-type: none;
  padding: 0;
}

.book-item {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.book-image {
  width: 120px;
  height: 160px;
  object-fit: cover;
  margin-right: 20px;
}

.book-details {
  flex: 1;
}

.book-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.book-author {
  margin-bottom: 10px;
}

.book-download {
  display: inline-block;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.book-download:hover {
  background-color: #45a049;
}
</style>
