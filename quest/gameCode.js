//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do {//Выводим первый вопрос
	ok = false;
	event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
	PushAnswer(works.a00, works.a1, works.a2);
	if (event == -1) {
		break;
	}
	else {
		ok = isAnswer(works.a00, event);
	}
} while (!ok);

switch (event) {
	case 1: // Первое действие - если в первом окне ввели 1 то открываем серию окон - окно 2
		do {
			ok = false;
			event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
			PushAnswer(works.b00, works.b1, works.b2);
			if (event == -1) {
				break;
			}
			else {
				ok = isAnswer(works.b0, event);
			}
		} while (!ok);

		switch (event) {
			case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
			case 2: // Второе действие Если ввели 2 то также переходим на 4 окно
				do {
					ok = false;
					event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
					PushAnswer(works.d00, works.d1, works.d2);
					if (event == -1) {
						break;
					}
					else {
						ok = isAnswer(works.d0, event);
					}
				} while (!ok);
					break;
			case -1: // Второе действие
				break;
			default:
				alert('Ошибка');
		}
			break;
	case 2: // Первое действие Если в 1 окне ввели 2 то переходим к 3 окну
		do {
			ok = false;
			event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
			PushAnswer(works.c00, works.c1, works.c2);
			if (event == -1) {
				break;
			}
			else {
				ok = isAnswer(works.c0, event);
			}
		} while (!ok);
		switch (event) {
			case 1: // Второе действие
			case 2: // Второе действие
				do {
					ok = false;
					event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
					PushAnswer(works.d00, works.d1, works.d2);
					if (event == -1) {
						break;
					}
					else {
						ok = isAnswer(works.d0, event);
					}
				} while (!ok);
					break;
			case -1: // Второе действие
				break;
			default:
				alert('Ошибка');
		}
		break;
	case -1: // Первое действие
		break;
	default:
		alert('Ошибка');
}

alert('Спасибо за игру');
console.log(answers);
var step = +prompt('Введите номер вопроса');
console.log(step);
alert('На ходу № ' + step + ' ' + 'был задан вопрос: ' + answers[step-1][0] + 'получен ответ: ' + answers[step-1][1]);

//------------------------------------------

function isAnswer(q, event) {
	if (isNaN(event) || !isFinite(event)) {
		alert('Вы ввели недопустимый символ');
		return false;
	}
	else if (event < 1 || event > q) {
		alert('Ваше число выходит из допустимого диапозона');
		return false;
	}
	return true;
}

//------------------------------------------

function PushAnswer(question, answer1, answer2) {
	switch (event) {
		case 1: answers.push([question, answer1])
			break;
		case 2: answers.push([question, answer2])
			break;
		case -1: answers.push([question, 'Выход из игры'])
			break;
		default: answers.push([question, 'Произошла ошибка'])
	}
}
