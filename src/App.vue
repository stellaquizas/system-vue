<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { VERSION } from './config/version.ts'
</script>

<template>
  <div class="app-wrapper min-h-screen bg-gray-100 w-full">
    <header class="bg-white shadow-md w-full">
      <div class="app-container flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        <div class="flex items-center">
          <i class="fas fa-paw text-blue-600 text-2xl mr-2"></i>
          <span class="font-bold text-xl text-blue-600" :title="`Version ${VERSION}`"
            >Spring System</span
          >
        </div>
        <nav class="flex space-x-4">
          <RouterLink to="/" class="px-3 py-2 rounded hover:bg-blue-100 text-blue-600">
            <i class="fas fa-home mr-1"></i>
            <span>Home</span>
          </RouterLink>
          <RouterLink to="/about" class="px-3 py-2 rounded hover:bg-blue-100 text-blue-600">
            <i class="fas fa-info-circle mr-1"></i>
            <span>About</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="w-full">
      <RouterView />
    </main>

    <footer class="bg-white shadow-md mt-8 py-4 w-full">
      <div class="app-container text-center text-gray-600 px-4 md:px-6 lg:px-8">
        <p style="color: #4b5563 !important">Spring System Demo &copy; 2025</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Custom container class to replace Tailwind's container */
.app-container {
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

/* Ensure the app wrapper takes full width */
.app-wrapper {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Override any potential conflicting styles */
body,
html {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Remove any default styling for inputs */
input {
  appearance: none !important;
  -webkit-appearance: none !important;
  outline: none !important;
  background-color: #fff !important;
  color: #1f2937 !important;
}

/* Fix any dotted outlines in Firefox */
input::-moz-focus-inner {
  border: 0 !important;
}

/* Ensure consistent input styling with higher contrast */
input::placeholder {
  color: #6b7280 !important; /* Tailwind gray-500 for better visibility */
  opacity: 1 !important;
}

/* Fix for dotted lines in inputs */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  transition: background-color 5000s ease-in-out 0s !important;
}

/* Ensure text is visible */
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
div,
a,
button {
  color: inherit;
}

/* Ensure Font Awesome icons are visible */
.fas,
.far,
.fab,
.fa {
  display: inline-block !important;
  vertical-align: middle !important;
  font-family: 'Font Awesome 6 Free' !important;
}

/* Fix for Font Awesome icons */
i.fas,
i.far,
i.fab,
i.fa {
  font-style: normal !important;
}

/* Specific font-weight fixes for different Font Awesome styles */
.fas {
  font-weight: 900 !important; /* Solid icons need 900 weight */
}

.far {
  font-weight: 400 !important; /* Regular icons need 400 weight */
}

.fab {
  font-family: 'Font Awesome 6 Brands' !important; /* Brand icons need different font family */
  font-weight: 400 !important;
}
</style>
