import Collapse from './widgets/Collapse';
import Callback from './widgets/Callback';

window.onload = () => {
  const app = document.getElementById('app');
  const collapseText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ';

  app.appendChild(new Collapse(collapseText).render());
  app.appendChild(new Callback().render());
};
