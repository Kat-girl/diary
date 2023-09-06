let classCards = [
  {
    date: 'August 16, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Чтение слов',
        score: 5
      },
      {
        task: 'Поиск транскрипции',
        score: 5
      },
      {
        task: 'Написание слов',
        score: 5
      },
      {
        task: 'Перевод слов с английского на русский',
        score: 4
      },
      {
        task: 'Чтение и перевод текста ex.2 p.47',
        score: 4
      }
    ],
    behaviour: 5
  },
  {
    date: 'August 18, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Чтение новых слов',
        score: 5
      },
      {
        task: 'Найти рифму к словам',
        score: 5
      },
      {
        task: 'Просмотр мультфильма',
        score: '+'
      }
    ],
    behaviour: '5',
  },
  {
    date: 'August 23, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Повторение новых слов (p.49, ex.4)',
        score: 5
      },
      {
        task: 'Изучение нового материала I like - he likes',
        score: '+'
      },
      {
        task: 'Просмотр мультфильма',
        score: '+'
      }
    ],
    behaviour: '5',
  },
  {
    date: 'August 25, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Повторение новых слов (p.49, ex.4)',
        score: 5
      },
      {
        task: 'Перевод словосочетаний типа: 10 ручек, 7 карандашей и т.п.',
        score: 4
      },
      {
        task: 'Просмотр обучающего видео с последующим разбором',
        score: '+'
      }
    ],
    behaviour: '5-',
  },
  {
    date: 'August 30, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Повторение правила "I like - He likes"',
        score: '+'
      },
      {
        task: 'Чтение, перевод фраз и предложений',
        score: 4
      }
    ],
    behaviour: '5-',
  },
  {
    date: 'September 1, 2023',
    isPaid: true,
    tasks: [
      {
        task: 'Повторение правила "I like - He likes"',
        score: '+'
      },
      {
        task: 'Ex. 5, p.50 - переделать предложения',
        score: 5
      },
      {
        task: 'Просмотр обучающего видео с последующим разбором',
        score: '+'
      }
    ],
    behaviour: '5',
  },
  {
    date: 'September 6, 2023',
    isPaid: false,
    tasks: [
      {
        task: 'Просмотр обучающего видео с последующим разбором',
        score: '+'
      },
      {
        task: 'Повторение слов и фраз, изученных ранее',
        score: 5
      },

    ],
    behaviour: 5,
  }
];

let getNewEvaluationTypeItem = (data) => {
  let newEvaluationTypeItem = document.querySelector('#evaluation-type-item').content.querySelector('.evaluation__type-item').cloneNode(true);
  newEvaluationTypeItem.querySelector('.evaluation__task').textContent = data.task;
  newEvaluationTypeItem.querySelector('.evaluation__score').textContent = data.score;

  return newEvaluationTypeItem;
};

let addEvaluationTypeItem = (array) => {
  let fragment = document.createDocumentFragment();
  array.forEach((data) => {
    fragment.append(getNewEvaluationTypeItem(data));
  });
  return fragment;
};

let getNewItem = (data) => {
  let newItem = document.querySelector('#evaluation-item').content.querySelector('.evaluation__item').cloneNode(true);
  newItem.querySelector('.evaluation__date').textContent = data.date;

  let payment = 'evaluation__payment-mark--yes';
  if (!data.isPaid) {
    payment = 'evaluation__payment-mark--no';
  }
  newItem.querySelector('.evaluation__payment-mark').classList.add(payment);

  newItem.querySelector('.evaluation__score').textContent = data.behaviour;

  newItem.querySelector('.evaluation__type-list').append(addEvaluationTypeItem(data.tasks));

  return newItem;
};

let addItem = (array) => {
  let fragment = document.createDocumentFragment();
  array.forEach((data) => {
    fragment.prepend(getNewItem(data));
  });
  document.querySelector('.evaluation__list').prepend(fragment);
};

addItem (classCards);

let firstLi = document.querySelector('.evaluation__item:first-child');
firstLi.classList.add('evaluation__item--latest');
