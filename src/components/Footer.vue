<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <p class="footer__brand">Khmer Food</p>
        <p class="footer__tag">Cambodian dishes, cooked and shared the traditional way.</p>
      </div>
      <p class="footer__note">Student project — menu for demonstration purposes only.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--rice);
  margin-top: 64px;
}
.footer__inner {
  padding: 32px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
}
.footer__brand {
  font-family: var(--font-display);
  font-size: 1.1rem;
  margin: 0 0 4px;
  color: var(--rice);
}
.footer__tag {
  color: #cbb89e;
  font-size: 0.9rem;
  margin: 0;
}
.footer__note {
  color: #a3927a;
  font-size: 0.8rem;
  margin: 0;
}
</style>
