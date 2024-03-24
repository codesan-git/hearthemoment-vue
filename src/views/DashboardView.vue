<script setup lang="ts">
import { ref } from 'vue'

const underlineColor = ref('#FFC0CA')
const colors = ['#FFC0CA', '#82B4FF', '#FEA079', '#FF6B6B']
let colorIndex = 0

const changeUnderlineColor = () => {
  underlineColor.value = colors[colorIndex]
  colorIndex = (colorIndex + 1) % colors.length
}

setInterval(changeUnderlineColor, 2000)
</script>
<template>
  <main>
    <div class="background-img"></div>
    <div class="content">
      <h1>
        football isn’t just for you,<br />but
        <span :style="{ 'text-decoration-color': underlineColor }">everyone.</span>
      </h1>
      <button>Learn more about us</button>
    </div>
    <!-- <div class="marquee">
      <div class="track">
        <div>
          &#x2022; hearthemoment &#x2022; その瞬間を聴 &#x2022; höre den moment &#x2022; استمع
          لللحظة &#x2022; Écoutez le moment &#x2022; Escucha el momento
        </div>
      </div>
    </div> -->
    <section class="marquee">
      <h1>
        &#x2022; hearthemoment &#x2022; その瞬間を聴 &#x2022; höre den moment &#x2022; استمع لللحظة
        &#x2022; Écoutez le moment &#x2022; Escucha el momento
      </h1>
      <h1>
        &#x2022; hearthemoment &#x2022; その瞬間を聴 &#x2022; höre den moment &#x2022; استمع لللحظة
        &#x2022; Écoutez le moment &#x2022; Escucha el momento
      </h1>
      <h1>
        &#x2022; hearthemoment &#x2022; その瞬間を聴 &#x2022; höre den moment &#x2022; استمع لللحظة
        &#x2022; Écoutez le moment &#x2022; Escucha el momento
      </h1>
      <h1>
        &#x2022; hearthemoment &#x2022; その瞬間を聴 &#x2022; höre den moment &#x2022; استمع لللحظة
        &#x2022; Écoutez le moment &#x2022; Escucha el momento
      </h1>
    </section>
  </main>
</template>

<style scoped>
main {
  background-color: #d9d996;
  height: 100vh;
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.background-img {
  height: 100%;
  background:
    url('../assets//images/dotdot.png') left no-repeat,
    url('../assets/images/ramos.png') right no-repeat;
  background-size:
    auto 100%,
    auto 100%;
  background-position: -65%, 182%;
  position: relative;
}
.content {
  position: absolute;
  width: 1219px;
  top: 30%;
  left: 60%;
  transform: translate(-50%, -50%);
}
.content h1 {
  color: black;
  text-transform: lowercase;
  font-size: 96px;
  font-weight: 500;
  margin-bottom: 10px;
  letter-spacing: -7px;
  line-height: 99%;
}
.content h1 span {
  font-weight: 800;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 1.2rem;
  transition: 0.3s;
  text-underline-position: above;
  text-underline-offset: -10px;
}
button {
  background-color: transparent;
  cursor: pointer;
  width: 265px;
  height: 68px;
  border: 3px;
  border-style: solid;
  border-color: black;
  border-radius: 12px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 40px;
  transition: 0.3s ease-in-out;
  letter-spacing: -1px;
}
button:hover {
  background-color: #82b4ff;
  cursor: pointer;
  width: 265px;
  height: 68px;
  border: 3px;
  box-shadow: 0px 8px;
  border-style: solid;
  border-color: black;
  border-radius: 12px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 40px;
  transition: 0.5s ease-in-out;
  letter-spacing: -1px;
}
/* .marquee {
  position: absolute;
  width: 100vw;
  height: 60px;
  overflow: hidden;
  bottom: 0px;
  font-size: 42px;
  background-color: #ff6b6b;
}

.track {
  display: flex;
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 5s infinite linear;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
} */
.marquee {
  display: flex;
  justify-content: flex-start;
  background: #ff6b6b;
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  /* height: 60px; */
}

.marquee h1 {
  font-size: 38px;
  text-transform: lowercase;
  white-space: nowrap;
  letter-spacing: 1px;
  animation: move-rtl 8500ms linear infinite;
  margin: 0px;
}
@keyframes move-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
