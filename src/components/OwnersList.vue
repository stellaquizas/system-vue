<template>
  <div class="w-full">
    <!-- Add New Owner Form -->
    <div class="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800" style="color: #1f2937 !important">
        <i class="fas fa-user-plus mr-2"></i>
        <span style="color: #1f2937 !important">Add New Owner</span>
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          v-model="newOwner.firstName"
          placeholder="First Name"
          class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autocomplete="off"
          style="color: #1f2937 !important; background-color: white !important"
        />
        <input
          v-model="newOwner.lastName"
          placeholder="Last Name"
          class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autocomplete="off"
          style="color: #1f2937 !important; background-color: white !important"
        />
        <input
          v-model="newOwner.address"
          placeholder="Address"
          class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autocomplete="off"
          style="color: #1f2937 !important; background-color: white !important"
        />
        <input
          v-model="newOwner.city"
          placeholder="City"
          class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autocomplete="off"
          style="color: #1f2937 !important; background-color: white !important"
        />
        <input
          v-model="newOwner.telephone"
          placeholder="Telephone"
          class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autocomplete="off"
          style="color: #1f2937 !important; background-color: white !important"
        />
      </div>
      <button
        @click="addOwner"
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
      >
        <i class="fas fa-plus mr-2"></i>
        <span>Add Owner</span>
      </button>
    </div>

    <!-- Owners List Table -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <h2
        class="text-2xl font-bold p-4 sm:p-6 bg-gray-50 border-b"
        style="color: #1f2937 !important"
      >
        <i class="fas fa-users mr-2"></i>
        <span style="color: #1f2937 !important">System Users</span>
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
              >
                Address
              </th>
              <th
                class="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
              >
                City
              </th>
              <th
                class="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
              >
                Telephone
              </th>
              <th
                class="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="owner in owners" :key="owner.id" class="hover:bg-gray-50">
              <td class="px-3 py-4 sm:px-6 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">
                  {{ owner.firstName }} {{ owner.lastName }}
                </div>
                <!-- Mobile-only info -->
                <div class="text-xs text-gray-500 mt-1 sm:hidden">
                  {{ owner.address }}, {{ owner.city }}<br />
                  {{ owner.telephone }}
                </div>
              </td>
              <td
                class="px-3 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell"
              >
                {{ owner.address }}
              </td>
              <td
                class="px-3 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell"
              >
                {{ owner.city }}
              </td>
              <td
                class="px-3 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell"
              >
                {{ owner.telephone }}
              </td>
              <td class="px-3 py-4 sm:px-6 whitespace-nowrap text-sm font-medium">
                <button @click="deleteOwner(owner.id)" class="text-red-600 hover:text-red-900 mr-3">
                  <i class="fas fa-trash"></i>
                </button>
                <button @click="editOwner(owner)" class="text-blue-600 hover:text-blue-900">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Define Owner interface
interface Owner {
  id: number
  firstName: string
  lastName: string
  address: string
  city: string
  telephone: string
}

const API_URL = 'http://localhost:9966/system/api'
const owners = ref<Owner[]>([])

// New owner form data
const newOwner = ref<Omit<Owner, 'id'>>({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  telephone: '',
})

// Load owners
const loadOwners = async () => {
  try {
    const response = await axios.get(`${API_URL}/owners`)
    owners.value = response.data
  } catch (error) {
    console.error('Error loading owners:', error)
  }
}

// Add owner
const addOwner = async () => {
  try {
    await axios.post(`${API_URL}/owners`, newOwner.value)
    // Reset form
    newOwner.value = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      telephone: '',
    }
    // Reload list
    loadOwners()
  } catch (error) {
    console.error('Error adding owner:', error)
  }
}

// Delete owner
const deleteOwner = async (id: number) => {
  if (confirm('Are you sure you want to delete this owner?')) {
    try {
      await axios.delete(`${API_URL}/owners/${id}`)
      loadOwners()
    } catch (error) {
      console.error('Error deleting owner:', error)
    }
  }
}

// Edit owner (placeholder function)
const editOwner = (owner: Owner) => {
  console.log('Edit owner:', owner)
  // Implement edit functionality here
  alert(`Edit functionality for ${owner.firstName} ${owner.lastName} not implemented yet`)
}

// Load owners when component mounts
onMounted(() => {
  loadOwners()
})
</script>
