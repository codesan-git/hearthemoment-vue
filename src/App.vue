<script setup lang="ts"></script>

<template>
  <main>
    <div alt="Vue logo" class="background-img"></div>
    <div class="first-content">
      <section>
        <h1>
          Hear<span>The<span>Moment</span></span>
        </h1>
      </section>
      <section>
        <button>
          Start now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
main {
  background-color: #23211f;
  height: 100vh;
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.background-img {
  height: 100%;
  background-image: url('../src/assets/images/ramos.png');
  background-repeat: no-repeat;
  background-position: 40% 50%;
  background-size: contain;
  position: relative;
}
.first-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.first-content h1 {
  color: #d9d9d9;
  text-transform: uppercase;
  font-size: 96px;
  font-weight: 400;
  margin-bottom: 10px;
}
.first-content h1 span {
  font-weight: 600;
}
.first-content h1 span span {
  font-weight: 800;
}
.first-content section {
  width: 100%;
  text-align: center;
}
.first-content section button {
  position: relative;
  width: 277px;
  height: 64px;
  font-size: 20px;
  color: #d9d9d9;
  font-weight: 700;
  cursor: pointer;
  background-color: #23211f;
  border: 3px;
  border-style: solid;
  border-color: black;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}
.first-content section button:hover {
  background-color: #d9d996;
  color: #23211f;
  font-weight: 700;
  border-color: black;
}
.first-content section button svg {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  right: 5px;
  color: #23211f;
  transition: right 0.3s ease-in-out;
}
.first-content section button:hover svg {
  right: 0px;
}
</style>
