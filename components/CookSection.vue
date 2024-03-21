<script setup></script>

<template>
  <div class="container-space font text-secondary bg-sec-primary">
    <div class="d-flex justify-space-between w-100 align-center pa-3">
      <div
        class="heading-2"
        :class="$vuetify.display.xs || $vuetify.display.sm ? 'text-center' : ''"
      >
        <p>
          "Oplev en skøn smagsoplevelse i hjertet af Nyborg"
        </p>
      </div>
      <img
        class="leaf-image"
        :height="$vuetify.display.xs ? 500 : 800"
        src="/assets/pngegg%20(1).png"
      />
    </div>
  </div>
</template>
