'use strict';

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(cb) {
    this.observers.push(cb);
  }

  unsubscribe(cb) {
    this.observers.filter(fn => fn !== cb);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}

const observer = new EventObserver();

observer.subscribe(data => {
  console.log('WORK SUBscribe', data);
});

observer.broadcast({ text: 'TEXT GOOO' });
console.log(observer);

//
//
//
//

const input = document.querySelector('input');
const div = document.querySelector('div');

const inputObserver = new EventObserver();

inputObserver.subscribe(text => {
  div.textContent = text;
});

input.addEventListener('input', fnInput);

function fnInput({ target }) {
  inputObserver.broadcast(target.value);
}
