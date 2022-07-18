export default class DOM {
  // constructor(parameters) {

  // }
  static appendElements(parent: Element, arrOfElements: Array<Element>) {
    const df = new DocumentFragment();
    if (Array.isArray(arrOfElements)) {
      df.append(...arrOfElements);
    } else {
      df.append(arrOfElements);
    }
    parent.append(df);
  }
}
