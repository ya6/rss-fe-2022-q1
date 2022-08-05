const carTrack = ((height: number, top: number, bottom: number, index: number) => {
  console.log(height, top, bottom, index);

  const carTrackEl = `
  <div class="car-track brd "  data-track="${index}" style="height:${height}px;">
    <div style="display: flex">
      <div class="control-remote">
       <button class="" data-button="select">Select</button>
       <button class="" data-button="del">del</button>
       <button class="" data-button="run">Run</button>
       <button class="" data-button="back">Back</button>
      </div>    
      <div class="" style="width: 100%">
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
