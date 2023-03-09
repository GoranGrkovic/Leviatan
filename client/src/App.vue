<template>
  <div >
    <Header />
    <Home />
    <Show />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from './components/Home'
import Show from "./components/Show"
export default {
  name: "App",
  components: {
    Header,
    Home,
    Show,
  },
};
</script>