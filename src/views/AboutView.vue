<template>
  <div class="w-full py-8 px-4 md:px-6 lg:px-8">
    <div class="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h1 class="text-3xl font-bold mb-6 text-blue-600" style="color: #2563eb !important">
        <i class="fas fa-info-circle mr-2"></i>
        <span style="color: #2563eb !important">About Spring System</span>
      </h1>

      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h2>
          <p class="text-gray-700">
            Spring System is a modern, full-stack demonstration application that showcases best
            practices in software development. It provides a simple yet powerful system management
            system.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-3 text-gray-800">Technology Stack</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4">
              <h3 class="text-xl font-medium mb-2 text-blue-500" style="color: #3b82f6 !important">
                <i class="fas fa-server mr-2"></i>
                <span style="color: #3b82f6 !important">Backend</span>
              </h3>
              <ul class="list-disc pl-5 text-gray-700">
                <li>Spring Boot 3</li>
                <li>Spring Data JPA</li>
                <li>PostgreSQL Database</li>
                <li>RESTful API</li>
                <li>OpenAPI/Swagger Documentation</li>
              </ul>
            </div>

            <div class="border rounded-lg p-4">
              <h3 class="text-xl font-medium mb-2 text-blue-500" style="color: #3b82f6 !important">
                <i class="fas fa-desktop mr-2"></i>
                <span style="color: #3b82f6 !important">Frontend</span>
              </h3>
              <ul class="list-disc pl-5 text-gray-700">
                <li>Vue.js 3</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Axios for API calls</li>
                <li>Font Awesome icons</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-3 text-gray-800">Deployment</h2>
          <p class="text-gray-700">
            The entire application is containerized using Docker, making it easy to deploy and
            scale. Each component (frontend, backend, database) runs in its own container, following
            modern microservices architecture principles.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles needed */
</style>
