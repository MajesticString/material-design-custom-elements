// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './mat-card.css';

export class MatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.classList.add('mat-card');

    const style = document.createElement('style');
    style.textContent = styles.toString();

    this.shadowRoot.append(style);
  }
}
