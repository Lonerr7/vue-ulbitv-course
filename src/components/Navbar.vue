<script>
export default {};
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__listItem">
        <MyButton @click="$router.push('/posts')">Посты</MyButton>
      </li>
      <li class="navbar__listItem">
        <MyButton @click="$router.push('/about')">About</MyButton>
      </li>
      <li class="navbar__listItem">
        <MyButton @click="$router.push('/')">Главная страница</MyButton>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  height: 60px;
  background-color: rgb(50, 84, 50);
  border-radius: 5px;
}

.navbar__list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
