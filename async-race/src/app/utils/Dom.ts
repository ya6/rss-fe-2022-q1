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
    const elementToClear = element;
    elementToClear.innerHTML = '';
  }

  static appendFromStringToDom(
    parent: HTMLElement,
    stringContent: string,
  ) {
    parent.insertAdjacentHTML('beforeend', stringContent);
  }
}
