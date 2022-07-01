import './sources.css';

interface ISources {
 draw: (data: object[]) => void
}

class Sources implements ISources {
  draw(data: object[]) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: {name?: string; id?: string}) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      sourceClone!.querySelector('.source__item-name')!.textContent = item.name!;
      sourceClone!.querySelector('.source__item')!.setAttribute('data-source-id', item.id!);
      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
