const carTrack = ((height: number, top: number, bottom: number, index: number) => {
  console.log(height, top, bottom, index);

  const carTrackEl = `
  <div class="car-track"  data-track="${index}" style="width: 100%; height:${height}px; border: 1px solid black">
        <div style="width: 100%; height: ${top}px; background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(100,100,100,1) 100%);
         opacity: 1"></div>
          <div style="width: 100%; height: ${bottom}px; background: black;"></div>
      </div>
  `;
  return carTrackEl;
});

export default carTrack;
