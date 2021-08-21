<template>
  <div>
    <div class="ui top fixed menu">
      <div class="item">
        <img src="svg/chatbox-outline.svg">
      </div>
      <router-link :to="{ name: 'Home' }" class="item">Home</router-link>
      <router-link :to="{ name: 'SubjectShow', params: { category: 'information', subject: 'information-technology' } }" class="item">Informations Technology</router-link>
    </div>
  </div>
</template>
