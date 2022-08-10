import { CarType } from '../types';

const carTrack = ((
  car: CarType,
  height: number,
  top: number,
  bottom: number,
  index: number,
) => {
  // console.log(height, top, bottom, index);
  const { name = '', id = '', color = '' } = car || {};
  const carTrackEl = `
  <div class="car-track brd "  data-track="${index}" style="height:${height}px;">
    <div style="display: flex">
      <div class="control-remote">
       <button class="track-button" data-button="control select" data-id="${id}" data-name="${name} ${color}">Select</button>
       <button class="track-button" data-button="control del" data-id="${id}">del</button>
       <button class="track-button" data-button="control run" data-id="${id}">Run</button>
       <button class="track-button" data-button="control back" data-id="${id}">Back</button>
      </div>    
      <div class="" style="width: 100%">
      <div class="car-name">${name}</div>
      <div style="width: 100%; height: ${top}px; background: linear-gradient(0deg, rgba(240,240,240,1) 0%,
      rgba(100,100,100,1) 100%); opacity: 1">
      </div>
      <div style="width: 100%;height: ${bottom}px; background: black;"></div>
      </div>
    </div>
  </div>
  `;
  return carTrackEl;
});

export default carTrack;
