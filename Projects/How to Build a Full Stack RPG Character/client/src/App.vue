<template>
  <div id="app">
    <CharacterViewer />
    <CharacterCreator />
  </div>
</template>

<script>
import CharacterViewer from './components/CharacterViewer.vue'
import CharacterCreator from './components/CharacterCreator.vue'

export default {
  name: 'App',
  components: {
    CharacterViewer,
    CharacterCreator
  }
}
</script>