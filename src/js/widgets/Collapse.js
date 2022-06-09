export default class Collapse {
  constructor(text) {
    this.text = text;
  }

  render() {
    this.collapseEl = document.createElement('div');
    this.collapseEl.className = 'collapse';
    this.collapseBtn = document.createElement('div');
    this.collapseBtn.className = 'collapse__btn';
    this.collapseBtn.textContent = 'Collapse';
    this.collapseTextEl = document.createElement('p');
    this.collapseTextEl.className = 'collapse__text';
    this.collapseTextEl.textContent = this.text;

    this.collapseEl.appendChild(this.collapseBtn);
    this.collapseEl.appendChild(this.collapseTextEl);

    this.collapseBtn.addEventListener('click', () => {
      this.collapseTextEl.classList.toggle('active');	
    });

    return this.collapseEl;
  }
}
