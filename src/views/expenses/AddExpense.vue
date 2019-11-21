<template>
  <div>
    <div class="column col-6 col-lg-8 col-md-8 col-sm-12">
      <form class="form-horizontal" action="#forms">
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-example-4">Description</label>
          </div>
          <div class="col-9 col-sm-12">
            <input class="form-input" id="input-example-4" type="text" placeholder="Description">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-example-5">Price</label>
          </div>
          <div class="col-4 col-sm-12">
            <input class="form-input" id="input-example-5" type="number" placeholder="Price">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-example-5">Date</label>
          </div>
          <div class="col-4 col-sm-12">
            <input class="form-input" id="input-example-5" type="date" placeholder="Date">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Category</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Source</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Place</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Currency</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddExpense',
  computed: {
    trips() {
      return this.$store.state.trips
    }
  }
}
</script>

<style scoped>
  button {
    margin: .6rem .6rem 0 0;
  }
</style>
