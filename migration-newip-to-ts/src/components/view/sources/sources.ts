import './sources.css';

interface theNewsType {
id: string,
name: string,
description: string,
url: string,
category: string,
language: string,
country: string,
}
 type nameType = Pick<theNewsType, 'name'>; // Pick
 type idType = Pick<theNewsType, 'id'>;

interface ISources {
 draw: (data: Array<object>) => void // Generic
}

class Sources implements ISources {
  public draw(data: Array<object>) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    console.log('Sources -> draw -> data', data[0]);
    console.table({ a: 1 });

    // data.forEach((item: Partial<theNewsType>) => {
    // data.forEach((item: {name?: string; id?: string}) => {
    data.forEach((item: {name?: nameType; id?: idType}) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      sourceClone!.querySelector('.source__item-name')!.textContent = `${item.name!}`;
      sourceClone!.querySelector('.source__item')!.setAttribute('data-source-id', `${item.id!}`);
      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
