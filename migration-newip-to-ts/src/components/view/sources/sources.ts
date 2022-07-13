import './sources.css';
import { ITheNewsType, ISources } from '../../type/interfaces';

 type nameType = Pick<ITheNewsType, 'name'>; // Pick
 type idType = Pick<ITheNewsType, 'id'>;
 type descType = Pick<ITheNewsType, 'description'>;

class Sources implements ISources {
  public draw(data: Array<object>) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: {name?: nameType; id?: idType; description?: descType }) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      sourceClone!.querySelector('.source__item-name')!.textContent = `${item.name!}`;
      sourceClone!.querySelector('.source__item')!.setAttribute('data-source-id', `${item.id!}`);
      sourceClone!.querySelector('.source__item')!.setAttribute('data-source-desc', `${item.description!}`);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
