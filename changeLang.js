'use strict';

/*
 * EventObserver
 */
export class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(cb) {
    this.observers.push(cb);
  }

  broadcast(lang) {
    this.observers.forEach(subscriber => subscriber(lang));
  }
}
