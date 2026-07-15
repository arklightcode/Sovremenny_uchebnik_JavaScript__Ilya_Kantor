# Задание 1: 
[Перепишите с использованием функции-стрелки];
## Описание
Замените код Function Expression стрелочной функцией:
```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);