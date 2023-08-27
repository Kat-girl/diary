let classCards = [
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
    isPaid: false,
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
  }
]

let createElement = (tagName, className, text) => {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

let createCard = (card) => {
  let evaluationItem = createElement ('li', 'evaluation__item');

  let evaluationTitle = createElement ('h2', 'visually-hidden', 'Оценка работы');
  evaluationItem.appendChild(evaluationTitle);

  let evaluationHeader = createElement ('div', 'evaluation__header');
  evaluationItem.appendChild(evaluationHeader);

  let evaluationDate = createElement ('time', 'evaluation__date', card.date);
  evaluationHeader.appendChild(evaluationDate);

  let evaluationPaymentContainer = createElement ('div', 'evaluation__payment-container');
  evaluationHeader.appendChild(evaluationPaymentContainer);

  let evaluationPayment = createElement ('p', 'evaluation__payment', 'Оплата:');
  evaluationPaymentContainer.appendChild(evaluationPayment);

  let evaluationPaymentMark = createElement ('p', 'evaluation__payment-mark');
  let payment = 'evaluation__payment-mark--yes';
  if (!card.isPaid) {
    payment = 'evaluation__payment-mark--no';
  }
  evaluationPaymentMark.classList.add(payment);
  evaluationPaymentContainer.appendChild(evaluationPaymentMark);

  let evaluationType = createElement ('p', 'evaluation__type', 'Выполнение заданий');
  evaluationItem.appendChild(evaluationType);

  let evaluationTypeList = createElement ('ul', 'evaluation__type-list');
  evaluationItem.appendChild(evaluationTypeList);

  for (let i = 0; i < card.tasks.length; i ++) {
    let evaluationTypeItem = createElement ('li', 'evaluation__type-item');
    evaluationTypeList.appendChild(evaluationTypeItem);

    let evaluationTask = createElement ('span', 'evaluation__task', card.tasks[i].task);
    evaluationTypeItem.appendChild(evaluationTask);

    let evaluationDots = createElement ('span', 'evaluation__dots');
    evaluationTypeItem.appendChild(evaluationDots);

    let evaluationScore = createElement ('span', 'evaluation__score', card.tasks[i].score);
    evaluationTypeItem.appendChild(evaluationScore);
  }

  let evaluationBehaviourContainer = createElement ('div', 'evaluation__behaviour-container');
  evaluationItem.appendChild(evaluationBehaviourContainer);

  let evaluationTypeBehaviour = createElement ('p', 'evaluation__type', 'Поведение на занятии');
  evaluationTypeBehaviour.classList.add('evaluation__type-behaviour');
  evaluationBehaviourContainer.appendChild(evaluationTypeBehaviour);

  let evaluationBehaviourScore = createElement ('span', 'evaluation__score', card.behaviour);
  evaluationBehaviourContainer.appendChild(evaluationBehaviourScore);

  return evaluationItem;
};

let createCardsList = (cards) => {
  let evaluationList = document.querySelector('.evaluation__list');
  for (let i = 0; i < cards.length; i ++) {
    let classCard = cards[i];
    let cardsListItem = createCard (classCard);
    evaluationList.prepend(cardsListItem);
  }
};

createCardsList (classCards);

let firstLi = document.querySelector('.evaluation__item:first-child');
firstLi.classList.add('evaluation__item--latest');
