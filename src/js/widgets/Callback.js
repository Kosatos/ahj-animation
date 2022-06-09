export default class Callback {
  constructor() {}
  render() {
    this.callbackContainer = document.createElement('div');
    this.callbackContainer.className = 'callback-container';
    this.callbackEl = document.createElement('div');
    this.callbackEl.className = 'callback';
    this.callbackForm = document.createElement('form');
    this.callbackForm.className = 'callback__form';
    this.callbackLabel = document.createElement('label');
    this.callbackLabel.setAttribute('for', 'callback-message');
    this.callbackLabel.className = 'callback__label';
    this.callbackLabel.textContent = 'Напишите нам';
    this.callbackTextarea = document.createElement('textarea');
    this.callbackTextarea.id = 'callback-message';
    this.callbackTextarea.className = 'callback__textarea';
    this.callbackBtn = document.createElement('button');
    this.callbackBtn.type = 'button';
    this.callbackBtn.className = 'callback__btn';
    this.callbackBtn.textContent = 'Отправить';
    this.callbackCloseBtn = document.createElement('div');
    this.callbackCloseBtn.className = 'callback__close-btn';

    this.callbackForm.appendChild(this.callbackLabel);
    this.callbackForm.appendChild(this.callbackTextarea);
    this.callbackForm.appendChild(this.callbackBtn);

    this.callbackEl.appendChild(this.callbackForm);
    this.callbackEl.appendChild(this.callbackCloseBtn);

    this.callCallbackBtn = document.createElement('div');
    this.callCallbackBtn.className = 'callback__call-btn';

    this.callbackContainer.appendChild(this.callbackEl);
    this.callbackContainer.appendChild(this.callCallbackBtn);

    this.callCallbackBtn.addEventListener('click', () => {
      this.callbackEl.classList.toggle('active');
      this.callCallbackBtn.classList.toggle('hidden');
    });

    this.callbackCloseBtn.addEventListener('click', () => {
      this.callbackEl.classList.toggle('active');
      this.callCallbackBtn.classList.toggle('hidden');
    });

    return this.callbackContainer;
  }
}
