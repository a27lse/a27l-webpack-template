import Template from '@templates/Template.js';
import '@styles/main.scss';

(async function App() {
  const app = null || document.getElementById('app');
  app.innerHTML = await Template();
})();
