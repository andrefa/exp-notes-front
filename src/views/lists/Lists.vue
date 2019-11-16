<template>
  <main>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>1</td>
          <td>Transporte</td>
        </tr>
      </tbody>
    </table>
    <span>tabela categorias</span>
    <span>tabela currencies</span>
    <span>tabela places</span>
    <span>tabela sources</span>
    <span>tabela trips</span>
    <br />
    {{ places }}
  </main>
</template>

<script>
import { FETCH_PLACES } from '@/shared/store/action-types'

export default {
  name: 'Lists',
  computed: {
    places() {
      return this.$store.state.places
    }
  },
  created() {
    this.$store.dispatch(FETCH_PLACES)
  }
}
</script>
