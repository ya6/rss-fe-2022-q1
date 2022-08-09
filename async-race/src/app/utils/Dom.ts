export default class Dom {
  static appendElemToDOM = (
    parent: HTMLElement,
    arrOfElements: HTMLElement | Array<HTMLElement>,
  ) => {
    const df = new DocumentFragment();
    if (Array.isArray(arrOfElements)) {
      df.append(...arrOfElements);
    } else {
      df.append(arrOfElements);
    }
    parent.append(df);
  };

  static delElemFromDOM = (arrOfElements: HTMLElement | Array<HTMLElement>) => {
    if (Array.isArray(arrOfElements)) {
      arrOfElements.forEach((element) => {
        element.remove();
      });
    } else {
      arrOfElements.remove();
    }
  };

  static delAllChildren(element: HTMLElement) {
    // console.log('Dom => delAllChildren');
    // console.log(element);

    const elementToClear = element;
    elementToClear.innerHTML = '';
  }

  static clearApp() {
    const elementToClear = document.querySelector('.page-container');
    if (elementToClear !== null) {
      elementToClear.innerHTML = '';
    }
  }

  static clearGarage() {
    const elementToClear = document.querySelector('.tracks-container');
    if (elementToClear !== null) {
      elementToClear.innerHTML = '';
    }
  }

  static appendFromStringToDom(
    parent: HTMLElement,
    stringContent: string,
  ) {
    parent.insertAdjacentHTML('beforeend', stringContent);
  }
}
