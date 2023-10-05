// --------- Задание 1 --------- //
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Свойство для получения радиуса окружности
  get radius() {
    return this._radius;
  }

  // Свойство для установки радиуса окружности
  set radius(newRadius) {
    if (newRadius >= 0) {
      this._radius = newRadius;
    } else {
      console.error("Радиус не может быть отрицательным.");
    }
  }

  // Свойство для получения диаметра окружности
  get diameter() {
    return this._radius * 2;
  }

  // Метод для вычисления площади окружности
  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  // Метод для вычисления длины окружности
  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

// Пример использования класса
const myCircle = new Circle(5);

console.log("Радиус окружности:", myCircle.radius);
console.log("Диаметр окружности:", myCircle.diameter);
console.log("Площадь окружности:", myCircle.calculateArea());
console.log("Длина окружности:", myCircle.calculateCircumference());

// Изменение радиуса с использованием set-свойства
myCircle.radius = 7;
console.log("Новый радиус окружности:", myCircle.radius);
console.log("Новый диаметр окружности:", myCircle.diameter);

// --------- Задание 2 --------- //
// Реализовать класс, описывающий html элемент. 
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// 2
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде 
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок 
// и добавить его на страницу с помощью document.write().

// class HtmlElement {
//   constructor(tagName, isSelfClosing = false) {
//     this.tagName = tagName;
//     this.isSelfClosing = isSelfClosing;
//     this.textContent = '';
//     this.attributes = [];
//     this.styles = [];
//     this.children = [];
//   }

//   setAttribute(name, value) {
//     this.attributes.push({ name, value });
//   }

//   setStyle(name, value) {
//     this.styles.push({ name, value });
//   }

//   appendChild(childElement) {
//     this.children.push(childElement);
//   }

//   prependChild(childElement) {
//     this.children.unshift(childElement);
//   }

//   getHtml() {
//     const attributeString = this.attributes
//       .map(attr => `${attr.name}="${attr.value}"`)
//       .join(' ');

//     const styleString = this.styles
//       .map(style => `${style.name}: ${style.value};`)
//       .join(' ');

//     const elementOpenTag = `<${this.tagName} ${attributeString} style="${styleString}">`;

//     if (this.isSelfClosing) {
//       return elementOpenTag;
//     }

//     const elementCloseTag = `</${this.tagName}>`;

//     const childrenHtml = this.children.map(child => child.getHtml()).join('');

//     return `${elementOpenTag}${this.textContent}${childrenHtml}${elementCloseTag}`;
//   }
// }

// // Пример использования класса для создания блока
// const divElement = new HtmlElement('div', false);
// divElement.setAttribute('class', 'container');
// divElement.setStyle('background-color', 'lightblue');

// const headingElement = new HtmlElement('h1');
// headingElement.textContent = 'Привет, мир!';

// const paragraphElement = new HtmlElement('p');
// paragraphElement.textContent = 'Это пример блока с вложенными элементами.';

// divElement.appendChild(headingElement);
// divElement.appendChild(paragraphElement);

// // Добавление блока на страницу с помощью document.write()
// document.write(divElement.getHtml());

// --------- Задание 3 --------- //
// Реализовать класс, который описывает css класс. 
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.

// class CssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = [];
//   }

//   setStyle(name, value) {
//     // Проверяем, есть ли уже такой стиль, и если есть, обновляем его
//     for (let i = 0; i < this.styles.length; i++) {
//       if (this.styles[i].name === name) {
//         this.styles[i].value = value;
//         return;
//       }
//     }

//     // Если стиль не найден, добавляем его
//     this.styles.push({ name, value });
//   }

//   removeStyle(name) {
//     // Удаляем стиль с заданным именем
//     this.styles = this.styles.filter(style => style.name !== name);
//   }

//   getCss() {
//     const styleString = this.styles
//       .map(style => `${style.name}: ${style.value};`)
//       .join(' ');

//     return `.${this.className} { ${styleString} }`;
//   }
// }

// // Пример использования класса
// const myClass = new CssClass('my-style');
// myClass.setStyle('color', 'red');
// myClass.setStyle('font-size', '16px');
// myClass.setStyle('background-color', 'lightgray');

// console.log(myClass.getCss());

// // Удаление стиля
// myClass.removeStyle('font-size');
// console.log(myClass.getCss());




