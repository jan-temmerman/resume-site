<template>
  <div class="root" ref="rootEl">
    <NuxtPage />
  </div>
</template>

<script setup>
const rootEl = ref(null);

onMounted(() => {
  window.addEventListener('mousemove', moveGradient);
});

function moveGradient(e) {
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  const mouseX = Math.round((e.pageX / winWidth) * 100);
  const mouseY = Math.round((e.pageY / winHeight) * 100);

  if (rootEl.value) {
    rootEl.value.style.setProperty('--mouse-x', `${mouseX}%`);
    rootEl.value.style.setProperty('--mouse-y', `${mouseY}%`);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  font-family: "Poppins", serif;
  color: #ffffff;
  overflow: hidden;
}

h1, h2, h3, h4, p {
  opacity: .5;
}

.root {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: contrast(750%) brightness(100%);
  background:
      linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(255, 174, 0, .5)),
      radial-gradient(at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.75)),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.38' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  overflow: hidden;
}
</style>