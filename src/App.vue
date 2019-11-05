<template>
  <div id="app">
    <header class="navbar bg-primary">
      <section class="navbar-section">
        <router-link to="/">Login</router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/lists">Lists</router-link>
        <router-link to="/reports">Reports</router-link>
      </section>
      <section class="navbar-center">
        <h2>Expense notes</h2>
      </section>
      <section class="navbar-section"></section>
    </header>
    <router-view/>
  </div>
</template>
