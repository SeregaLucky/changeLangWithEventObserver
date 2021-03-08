'use strict';
import { refs } from './refs.js';
import { EventObserver } from './changeLang.js';

const langesesObserver = new EventObserver();

const Langeses = {
  RU: 'ru',
  ENG: 'eng',
};

const DataLang = {
  [Langeses.RU]: {
    title: 'Заголовок',
    p: 'Тексе',
  },

  [Langeses.ENG]: {
    title: 'TITLE',
    p: 'Text',
  },
};

refs.btnRu.addEventListener('click', fnRu);
refs.btnEng.addEventListener('click', fnEng);

function fnRu() {
  console.log(111);
  langesesObserver.broadcast(Langeses.RU);
  setLS(Langeses.RU);
}
function fnEng() {
  console.log(222);
  langesesObserver.broadcast(Langeses.ENG);
  setLS(Langeses.ENG);
}
function setLS(leng) {
  localStorage.setItem('leng', leng);
}

refs.listFind().forEach(el => {
  langesesObserver.subscribe(leng => {
    el.textContent = DataLang[leng][el.dataset.teg];
  });
});

const lengStart = localStorage.getItem('leng');
if (lengStart) {
  langesesObserver.broadcast(lengStart);
}
