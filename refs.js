'use strict';

export const refs = {
  btnRu: document.querySelector('button[data-lang="ru"]'),
  btnEng: document.querySelector('button[data-lang="eng"]'),

  listFind: () => document.querySelectorAll('.js_lang'),
};
