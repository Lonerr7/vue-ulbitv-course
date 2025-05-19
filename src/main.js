import { createApp } from 'vue';
import './reset.css';
import './style.css';
import App from './App.vue';
import components from './components/UI';
import router from './router/router';
import directives from './directives';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(pinia).use(router).mount('#app');
