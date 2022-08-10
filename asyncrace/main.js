(()=>{"use strict";var t={224:(t,e,a)=>{a.r(e)},597:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=n(a(719)),o=n(a(609)),c=n(a(949)),r=n(a(393)),i=n(a(927));class d{static clickHandler(t){let e;const a=t.target;null!==a&&a.getAttribute("data-button")&&(e=a.getAttribute("data-button").split(" "),"route"===e[0]&&d.routeDispatcher(e[1]),"control"===e[0]&&d.controlDispatcher(e[1],a),"pageControl"===e[0]&&d.pageControlDispatcher(e[1],a))}static routeDispatcher(t){"garage"===t&&c.default.index(),"top"===t&&i.default.index()}static controlDispatcher(t,e){if("create"===t){const t=document.querySelector('[data-create="name"]'),e=document.querySelector('[data-create="color"]');if(!(t.value.length>0))return;o.default.createCar({name:t.value,color:e.value}),c.default.index()}if("update"===t){const t=document.querySelector('[data-update="name"]'),e=document.querySelector('[data-update="color"]'),a=document.querySelector("[data-update-id]");o.default.updateCar(a.value,{name:t.value,color:e.value}),c.default.index()}if("select"===t){const t=document.querySelector('[data-update="name"]'),a=document.querySelector('[data-update="color"]'),n=document.querySelector("[data-update-id]"),[l,o]=e.getAttribute("data-name").split(" ");n.value=e.getAttribute("data-id"),t.value=l,a.value=o}if("del"===t&&(o.default.delCar(e.getAttribute("data-id")),c.default.index()),"generate"===t&&(o.default.generateCars(l.default.generateCars),c.default.index()),"run"===t){const t=e.getAttribute("data-id");o.default.runCar(t)}if("back"===t){const t=e.getAttribute("data-id");o.default.backCar(t)}}static pageControlDispatcher(t,e){"prev"===t&&(r.default.prevPage(),c.default.index()),"next"===t&&(r.default.nextPage(),c.default.index())}}e.default=d},2:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=n(a(188)),o=n(a(796)),c=n(a(263)),r=n(a(157)),i=n(a(797)),d=n(a(627));e.default=class{static home(){l.default.appendElemToDOM(document.body,o.default)}static garage(t,e){console.log("View => garage");const a=document.querySelector(".page-container");null!==a&&l.default.appendElemToDOM(a,(0,c.default)(t))}static topScores(){const t=document.querySelector(".page-container");null!==t&&l.default.appendElemToDOM(t,r.default)}static carTrack(t,e,a,n,o){const c=document.querySelector(".garage");null!==c&&l.default.appendFromStringToDom(c,(0,i.default)(t,e,a,n,o))}static car(t,e,a){null!==t&&l.default.appendFromStringToDom(t,(0,d.default)(e,a))}}},797:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e,a,n,l)=>{const{name:o="",id:c="",color:r=""}=t||{};return`\n  <div class="car-track brd "  data-track="${l}" style="height:${e}px;">\n    <div style="display: flex">\n      <div class="control-remote">\n       <button class="" data-button="control select" data-id="${c}" data-name="${o} ${r}">Select</button>\n       <button class="" data-button="control del" data-id="${c}">del</button>\n       <button class="" data-button="control run" data-id="${c}">Run</button>\n       <button class="" data-button="control back" data-id="${c}">Back</button>\n      </div>    \n      <div class="" style="width: 100%">\n      <div class="car-name">${o}</div>\n      <div style="width: 100%; height: ${a}px; background: linear-gradient(0deg, rgba(240,240,240,1) 0%,\n      rgba(100,100,100,1) 100%); opacity: 1">\n      </div>\n      <div style="width: 100%;height: ${n}px; background: black;"></div>\n      </div>\n    </div>\n  </div>\n  `}},796:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});const a=(()=>{const t=document.createElement("div");return t.className="app",t.insertAdjacentHTML("beforeend",'\n  <div class="neon-button-container">\n    <button class="neon-button" data-button="route garage">Garage</button>\n    <button class="neon-button" data-button="route top">Top scores</button>\n  </div>\n \n      \n  <div class="page-container">\n  </div>\n  '),t})();e.default=a},627:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const{color:a,id:n}=t;return`\n  <svg class = "car" data-car="${n}" height="${e}px" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.0" viewBox="0 0 5273 1612.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n\n   <path fill="f#2B2A29" d="m4688.7 598.92c179.46 71.09 355.38 151.18 526.3 240.91 26.6 13.96 45.47 37.62 53.27 66.62 2.02 7.52 3.25 15.24 3.61 23.02 0.12 2.57 0.14 5.14 0.08 7.71l-0.12 102.21c3.86 25.25-1.44 50.71-15.35 72.66l-315.85 498.52h-1416.8l-84.16-48.59h-2414.4c-49.85 24.6-103.05 40.94-157.8 48.59h-133.02v1.49c-58.82-6.88-116.02-23.74-169.37-50.08h-117.63c-70.59 0-132.89-35.97-168.19-97.11l-252.86-437.95c-28.97-50.19-34.23-106.94-14.98-161.6 19.24-54.65 58.87-95.58 112.88-116.54l41.57-16.14-51.78-105.3c-12.11-24.62-14.24-52.53-4.08-78.06l-32.93-32.93c-23-23-29.87-57.6-17.41-87.65 12.48-30.08 41.69-49.61 74.27-49.61h193.64l22.77-89.25c10.57-41.4 44.75-72.24 87.02-78.69 326.35-49.73 659.93-78.82 989.62-92.81 326.58-60.99 668.73-104.6 1000.4-115.75 33.85-1.14 67.72-1.91 101.59-2.26l32.24-0.34 28.49 30.93 207.21 8.43 2.7 3c459.02 18.41 911.23 129.11 1310.8 360.65 44.46 12.7 88.79 25.87 132.96 39.51 7.19-0.24 14.38-0.36 21.58-0.36 156.09 0 305.61 55.38 423.79 156.75z"/>\n   <path fill="#34302E" d="m5199.3 1046.3c2.54 9.5 1.17 18.62-4.09 26.92l-330.46 521.58c-6.39 10.1-16.67 15.74-28.62 15.74h-1158.3c-6.22 0-11.54-1.44-16.93-4.54l-201.86-116.54h-1578.9-872.48c-63.34 34.18-135.72 53.61-212.51 53.61-76.78 0-149.17-19.43-212.51-53.61h-135.22c-44.7 0-83.05-22.16-105.41-60.86l-252.86-437.95c-18.38-31.87-21.61-66.58-9.39-101.28 12.21-34.69 36.44-59.72 70.74-73.04l115.28-44.75-86.67-176.25c-3.54-7.18-4.07-14.05-1.52-19.88s7.45-8.96 14.19-9.09l36.34-0.67-14.66-29.82-15.09-30.68h-26.68c-2.17 0-4.05-0.77-5.6-2.32l-37.79-37.79c-2.31-2.31-2.97-5.61-1.71-8.63 1.24-3.02 4.03-4.89 7.31-4.89h156.44 20.47 112.79c-2.22-4.86-3.3-10.33-2.99-16.04 0.37-6.63 2.57-12.73 6.13-17.78v-109.92l-6.18-0.07c3.31-12.98 13.95-22.84 27.69-24.94 188.45-28.71 538.47-73.45 986.94-92.27 189.37-35.48 651.83-113.12 1094.5-117.74l37.3 40.51c37.29-1.01 75.74-1.44 115.17-1.18l-4.23-5.07 85.51 3.48 2.85 3.16c392.2 12.18 869.1 95.6 1315.4 356.52 50.73 14.42 101.45 29.5 152.11 45.26 10.28-0.54 20.62-0.83 31.03-0.83 148.08 0 283.14 55.63 385.5 147.08 179.55 70.67 357.1 151.03 530.89 242.27 8.71 4.57 14.41 11.79 16.96 21.25 0.69 2.56 1.09 5.09 1.2 7.58v0.04c0.05 1.04 0.04 2.07 0 3.09l-0.12 110.37z"/>\n   <path fill="#34302E" d="m4309.4 650.2-164.84 356.66c-3.18 6.89-8.25 10.74-14.09 10.71l-566.27-3.43c-3.04-0.01-5.63-1.01-8.24-3.16l-428.48-352.16c-1.32-1.07-2.52-1.78-3.99-2.35l-1132.3-433.82c-7.62-2.92-12.56-12.69-12.03-23.79 0.54-11.09 6.39-19.97 14.24-21.6 296.83-61.5 1411.2-231.86 2310 439.89 4.23 3.15 6.97 8.12 8.16 14.62 1.19 6.51 0.44 12.77-2.18 18.43z"/>\n   <path fill="#33312c" d="m3492.8 959.14-365.42-300.32c-1.3-1.07-2.5-1.78-3.95-2.35l-1132.3-433.83c-7.62-2.91-12.57-12.69-12.04-23.79 0.56-11.08 6.4-19.96 14.24-21.59 164.97-34.18 582.45-101.89 1075.1-40.09 305.73 72.55 624.93 202.4 920.79 423.53 4.2 3.14 6.96 8.1 8.16 14.61 1.18 6.51 0.45 12.77-2.18 18.43l-164.84 356.65c-3.18 6.91-8.25 10.74-14.09 10.7l-323.45-1.94z"/>\n   <path fill="${a}" d="m2708.4 292.38-1362-84.37s608.44-129.19 1183.3-135.19l178.7 194.03v25.53z"/>\n   <path fill="#33312c" d="m5165.5 1101.9-234.98 370.9h-1528.8v-1004.1c583.61 107.21 1187 288.93 1750.9 585.02 8.71 4.55 14.4 11.77 16.96 21.25 2.54 9.47 1.16 18.6-4.1 26.91z"/>\n   <path fill="#33312c" d="m453.96 572.74 210.12 242.63c6.56 7.58 9.29 16.57 7.37 24.39-1.88 7.82-7.86 12.24-16.17 11.96l-339.24-11.39c-10.02-0.33-20.22-7.64-25.41-18.18l-111.51-226.78c-3.54-7.18-4.07-14.05-1.52-19.88s7.45-8.96 14.19-9.09l240.62-4.49c7.67-0.14 15.43 3.76 21.55 10.84z"/>\n   <path fill="#3E3A30" d="m473.01 482.13 210.11 242.63c6.56 7.56 9.29 16.56 7.39 24.38-1.9 7.84-7.87 12.24-16.19 11.96l-339.25-11.38c-10.02-0.35-20.21-7.65-25.41-18.19l-111.51-226.77c-3.53-7.2-4.05-14.06-1.52-19.9 2.55-5.81 7.44-8.96 14.19-9.08l240.63-4.47c7.68-0.14 15.42 3.74 21.56 10.83z"/>\n   <path fill="#34302E" d="m519.57 535.89 163.55 188.86c6.56 7.58 9.29 16.56 7.39 24.38-1.9 7.84-7.87 12.24-16.19 11.96l-339.25-11.39c-10.02-0.33-20.21-7.64-25.41-18.18l-96.19-195.63h306.1z"/>\n   <path fill="#33312c" d="m1352.5 349.77-1202 466.6c-34.3 13.32-58.54 38.35-70.74 73.04-12.22 34.7-9 69.41 9.39 101.28l252.86 437.95c22.36 38.7 60.71 60.86 105.41 60.86h3669.4c53.22 0 98.46-32.56 115.4-83.02 16.9-50.46 0.43-103.7-42.04-135.78-386.05-291.6-1249.4-787.29-2782.5-928.68-19.64-1.81-36.84 0.62-55.23 7.76z"/>\n   <path fill="#898890" d="m237.7 1248 104.31 180.69c22.36 38.7 60.71 60.86 105.41 60.86h1432.7l-518.03-278.73-913.56-89.31-220.36 89.31 9.51 37.18z"/>\n   <path fill="#686770" d="m5195.2 1073.3-330.46 521.58c-6.39 10.1-16.67 15.74-28.62 15.74h-1158.3c-6.22 0-11.54-1.44-16.93-4.54l-883.04-509.81c-2.69-1.56-5.15-2.6-8.16-3.39l-2324-622.71c-15.65-4.19-25.93-18.41-25.06-34.58 0.9-16.19 12.7-29.2 28.72-31.64 21.37-3.25 45.03-6.72 70.46-10.33 1442.1 35.89 3829.9 521.29 4642.3 694.79l32.88-51.88c1.88 2.94 3.32 6.23 4.3 9.86 2.54 9.5 1.17 18.62-4.09 26.92z"/>\n   <polygon fill="#BAB6BF" points="2769.9 972.12 2768.6 971.76 2760.2 969.5 2915.9 576.95 2922.6 579.51"/>\n   <path fill="#CDCBD7" d="m3341.6 1301.2-564.75-326.06c-2.69-1.56-5.15-2.6-8.16-3.39l929.91 1.3-14.2 307.43s-172.09 11.67-342.79 20.72z"/>\n   <path fill="${a}" d="m5194.1 952.18-33.09 52.22c-831.13-177.49-3311.1-681.49-4740.5-696.63 3.31-12.98 13.95-22.84 27.69-24.94 605.98-92.3 2882.1-350.57 4733 621.18 8.71 4.57 14.41 11.79 16.96 21.25 2.54 9.5 1.17 18.62-4.09 26.92z"/>\n   <path fill="${a}" d="m4856 1482.4c-5.81 4.62-13 7.11-20.95 7.11h-1158.3c-6.22 0-11.54-1.44-16.93-4.54l-418.39-241.55 566.45-335.02 949.52 307.08 98.59 266.92z"/>\n   <path fill="${a}" d="m795.15 514.65c-319.71 0-578.87 259.16-578.87 578.87 0 40.17 4.1 79.36 11.9 117.24h1133.9c7.8-37.88 11.9-77.07 11.9-117.24 0-319.71-259.14-578.87-578.86-578.87z"/>\n   <path fill="#33312c" d="m795.15 1543.1c-247.63 0-449.6-201.97-449.6-449.61 0-247.63 201.97-449.59 449.6-449.59 247.62 0 449.6 201.95 449.6 449.59 0 247.63-201.98 449.61-449.6 449.61z"/>\n   <path fill="#683633" d="m798.47 892.25c112.22 0 203.17 90.95 203.17 203.15 0 112.22-90.95 203.18-203.17 203.18v-58.15c80.09 0 145.01-64.92 145.01-145.02 0-80.07-64.92-144.98-145.01-144.98v-58.17z"/>\n   <path fill="${a}" d="m4264.9 514.65c-319.7 0-578.87 259.16-578.87 578.87 0 153.17 59.52 292.44 156.65 395.97h844.42c97.13-103.53 156.65-242.8 156.65-395.97 0-319.71-259.15-578.87-578.86-578.87z"/>\n   <path fill="#898890" d="m4264.9 615.71c-263.92 0-477.83 213.91-477.83 477.79 0 164.8 83.41 310.09 210.33 395.99h534.98c126.91-85.91 210.31-231.19 210.31-395.99 0-263.89-213.9-477.79-477.79-477.79z"/>\n   <path fill="#4E4A4F" d="m609.07 771.21c178.01-102.78 405.62-41.8 508.4 136.22 102.78 178.01 41.78 405.63-136.22 508.4-178.01 102.78-405.64 41.78-508.41-136.22-102.77-178.02-41.79-405.63 136.23-508.4zm-13.24-22.94c-190.68 110.09-256.01 353.89-145.92 544.57 110.08 190.67 353.88 256 544.56 145.92 190.68-110.09 256.01-353.88 145.92-544.56-110.09-190.69-353.88-256.01-544.56-145.93z"/>\n   <path fill="${a}" d="m513.2 1375.5c124.47 124.61 321.5 155.54 481.26 63.31 190.68-110.09 256.01-353.89 145.92-544.56-17.86-30.92-39.22-58.51-63.3-82.64l-18.74 18.75c22.49 22.5 42.43 48.26 59.11 77.12 102.77 178.01 41.8 405.63-136.22 508.4-149.16 86.1-333.12 57.23-449.31-59.11l-18.73 18.73z"/>\n   <path fill="#33312c" d="m4264.9 1543.1c-247.63 0-449.6-201.97-449.6-449.61 0-247.63 201.97-449.59 449.6-449.59 247.64 0 449.6 201.95 449.6 449.59 0 247.63-201.96 449.61-449.6 449.61z"/>\n   <path fill="#898890" d="m4264.9 721.35c205.55 0 372.18 166.62 372.18 372.18 0 205.55-166.63 372.17-372.18 372.17s-372.18-166.62-372.18-372.17c0-205.56 166.63-372.18 372.18-372.18zm0-26.47c-220.18 0-398.65 178.46-398.65 398.65 0 220.17 178.46 398.63 398.65 398.63 220.17 0 398.65-178.46 398.65-398.63 0-220.19-178.48-398.65-398.65-398.65z"/>\n   <path fill="${a}" d="m3983 1375.4c72.12 72.16 171.8 116.75 281.89 116.75 220.17 0 398.65-178.46 398.65-398.63 0-110.1-44.61-209.74-116.76-281.89l-18.72 18.71c67.36 67.37 109.01 160.4 109.01 263.18 0 205.55-166.63 372.17-372.18 372.17-102.78 0-195.83-41.65-263.17-109l-18.72 18.72z"/>\n   <path fill="#D03648" d="m798.47 892.25c-112.22 0-203.18 90.95-203.18 203.15 0 112.22 90.95 203.18 203.18 203.18v-58.15c-80.09 0-145.02-64.92-145.02-145.02 0-80.07 64.92-144.98 145.02-144.98v-58.17z"/>\n   <polygon fill="#BAB6BF" points="869.66 821.02 857.64 757.24 886.64 771.78 898.67 835.57 813.35 1005.7 825.36 1069.4 796.37 1054.9 784.35 991.1"/>\n   <polygon fill="#4F494A" points="969 870.84 1027.3 842.33 998.31 827.77 939.99 856.29 854.68 1026.4 796.37 1054.9 825.37 1069.4 883.68 1040.9"/>\n   <polygon fill="#3E3A30" points="621.29 1316.2 562.98 1344.7 591.99 1359.3 650.3 1330.7 735.61 1160.6 793.92 1132.1 764.92 1117.6 706.61 1146.1"/>\n   <polygon fill="#BAB6BF" points="720.62 1366 732.65 1429.8 703.64 1415.3 691.62 1351.5 776.95 1181.4 764.92 1117.6 793.92 1132.1 805.96 1195.9"/>\n   <polygon fill="#BAB6BF" points="522.64 1019 458.86 1031 473.41 1002 537.19 990 707.3 1075.3 771.08 1063.3 756.53 1092.3 692.74 1104.3"/>\n   <polygon fill="#4F494A" points="572.47 919.67 543.95 861.35 529.4 890.36 557.92 948.67 728.01 1034 756.53 1092.3 771.08 1063.3 742.56 1005"/>\n   <polygon fill="#3E3A30" points="1017.8 1267.4 1046.3 1325.7 1060.9 1296.7 1032.4 1238.4 862.28 1153 833.76 1094.7 819.22 1123.7 847.73 1182.1"/>\n   <polygon fill="#BAB6BF" points="1067.6 1168 1131.4 1156 1116.9 1185 1053.1 1197 883.01 1111.7 819.22 1123.7 833.76 1094.7 897.56 1082.7"/>\n   <path fill="#A59FAC" d="m3691.8 584.13c205.29-48.17 615.19-156.01 0-119.71v119.71z"/>\n   <path fill="${a}" d="m3787.1 476.46c145.07 19.84 434.73 47.81 0-119.7v119.7z"/>\n   <path fill="#33312c" d="m2447.2 806.09c-10.22 2.08-16.81 12.06-14.74 22.27 2.08 10.23 12.06 16.82 22.28 14.74 10.22-2.07 16.81-12.06 14.74-22.27-2.08-10.22-12.06-16.82-22.28-14.74z"/>\n   <path fill="#33312c" d="m2436.2 751.86c-10.22 2.09-16.82 12.06-14.74 22.28s12.04 16.83 22.27 14.73c10.22-2.09 16.82-12.06 14.74-22.28-2.07-10.22-12.06-16.81-22.27-14.74z"/>\n   <path fill="#33312c" d="m2392.8 789.94c-10.21 2.09-16.81 12.05-14.73 22.28 2.08 10.22 12.06 16.82 22.28 14.74 10.22-2.09 16.82-12.06 14.73-22.29-2.08-10.22-12.05-16.82-22.28-14.72z"/>\n   <polygon fill="#33312c" points="2753.3 165.1 2654.6 205.99 2920.5 580.73 2738.9 1043.1 2745.6 1045.7 2928.5 579.74 2665.5 209.14 2756 171.67"/>\n   <path fill="#33312c" d="m1744.4 773.77c-45.66 0-82.9-37.24-82.9-82.89 0-45.66 37.24-82.9 82.9-82.9s82.91 37.24 82.91 82.9c0 45.65-37.25 82.89-82.91 82.89z"/>\n   <path fill="#898890" d="m1744.4 759.66c-37.88 0-68.79-30.91-68.79-68.78 0-37.88 30.91-68.78 68.79-68.78s68.78 30.9 68.78 68.78c0 37.87-30.9 68.78-68.78 68.78z"/>\n   <path fill="#33312c" d="m1572.8 1409.3-146.39-73.2c-7.5-3.76-16.57-1.03-20.78 6.21l-48.34 83.25c-1.44 2.51-1.46 5.37-0.02 7.89 1.43 2.52 3.89 3.97 6.8 3.99l201.52 1.86c7.45 0.07 13.79-4.86 15.53-12.12 1.75-7.25-1.64-14.53-8.31-17.88z"/>\n   <path fill="${a}" d="m348.63 505.22h-176.93c-2.17 0-4.05-0.77-5.6-2.32l-37.79-37.79c-2.31-2.31-2.97-5.61-1.71-8.63 1.24-3.02 4.03-4.89 7.31-4.89h176.91c-3.12 0.11-5.79 1.97-7 4.89-1.26 3.02-0.6 6.31 1.71 8.63l37.8 37.79c1.46 1.47 3.25 2.24 5.3 2.32z"/>\n   <path fill="#BAB6BF" d="m534.92 505.22h-206.83c-2.09-0.06-3.9-0.83-5.39-2.32l-37.79-37.79c-2.31-2.31-2.96-5.61-1.72-8.63 1.23-2.97 3.96-4.84 7.15-4.89h201.24c1.86 0.05 3.47 0.7 4.9 1.94l43.62 37.8c2.54 2.2 3.4 5.59 2.23 8.74-1.17 3.1-3.95 5.07-7.26 5.14h-0.15z"/>\n   <path fill="#CE3247" d="m1505.2 774.05-68.28-18.3c-1.37-0.36-2.71-0.1-3.84 0.77-1.12 0.87-1.73 2.1-1.73 3.52v27.84c0 1.33 0.51 2.47 1.52 3.35 1.01 0.86 2.22 1.23 3.52 1.04l68.26-9.55c2.11-0.29 3.68-1.99 3.81-4.12 0.13-2.12-1.23-3.99-3.27-4.55z"/>\n   <path fill="#33312c" d="m3662.8 867.34-144.93-38.83c-2.94-0.79-5.77-0.22-8.18 1.62-2.38 1.84-3.68 4.46-3.68 7.47v59.12c0 2.83 1.11 5.24 3.23 7.1 2.13 1.86 4.69 2.6 7.48 2.22l144.92-20.28c4.48-0.62 7.82-4.22 8.09-8.74 0.28-4.52-2.59-8.48-6.94-9.66z"/>\n   <path fill="#CE3247" d="m3623.6 867.25-69.02-18.5c-1.4-0.36-2.74-0.09-3.89 0.77-1.13 0.88-1.75 2.13-1.75 3.57v28.13c0 1.35 0.51 2.5 1.54 3.39 1.01 0.88 2.24 1.23 3.57 1.06l69.01-9.66c2.14-0.3 3.73-2.01 3.85-4.15 0.14-2.15-1.23-4.06-3.31-4.6z"/>\n   <path fill="#683633" d="m4265.2 892.25c112.22 0 203.17 90.95 203.17 203.15 0 112.22-90.95 203.18-203.17 203.18v-58.15c80.09 0 145.01-64.92 145.01-145.02 0-80.07-64.92-144.98-145.01-144.98v-58.17z"/>\n   <path fill="#D03648" d="m4265.2 892.25c-112.22 0-203.16 90.95-203.16 203.15 0 112.22 90.94 203.18 203.16 203.18v-58.15c-80.09 0-145.01-64.92-145.01-145.02 0-80.07 64.92-144.98 145.01-144.98v-58.17z"/>\n   <polygon fill="#BAB6BF" points="4339.4 821.02 4327.4 757.24 4356.4 771.78 4368.4 835.57 4283.1 1005.7 4295.1 1069.4 4266.1 1054.9 4254.1 991.1"/>\n   <polygon fill="#4F494A" points="4438.7 870.84 4497 842.33 4468 827.77 4409.7 856.29 4324.4 1026.4 4266.1 1054.9 4295.1 1069.4 4353.4 1040.9"/>\n   <polygon fill="#4F494A" points="4091 1316.2 4032.7 1344.7 4061.7 1359.3 4120 1330.7 4205.3 1160.6 4263.6 1132.1 4234.6 1117.6 4176.3 1146.1"/>\n   <polygon fill="#BAB6BF" points="4190.4 1366 4202.4 1429.8 4173.4 1415.3 4161.3 1351.5 4246.7 1181.4 4234.6 1117.6 4263.6 1132.1 4275.7 1195.9"/>\n   <polygon fill="#BAB6BF" points="3992.4 1019 3928.6 1031 3943.1 1002 4006.9 990 4177 1075.3 4240.8 1063.3 4226.2 1092.3 4162.5 1104.3"/>\n   <polygon fill="#4F494A" points="4042.2 919.67 4013.7 861.35 3999.1 890.36 4027.6 948.67 4197.7 1034 4226.3 1092.3 4240.8 1063.3 4212.3 1005"/>\n   <polygon fill="#4F494A" points="4487.6 1267.4 4516.1 1325.7 4530.6 1296.7 4502.1 1238.4 4332 1153 4303.5 1094.7 4288.9 1123.7 4317.5 1182.1"/>\n   <polygon fill="#BAB6BF" points="4537.4 1168 4601.2 1156 4586.6 1185 4522.8 1197 4352.7 1111.7 4288.9 1123.7 4303.5 1094.7 4367.3 1082.7"/>\n   <path fill="#898890" d="m2446.2 1090.3-366.9 142.42c-10.46 4.07-17.87 11.7-21.6 22.29-3.72 10.59-2.74 21.18 2.86 30.92l77.2 133.69c6.82 11.81 18.53 18.56 32.16 18.56h1120.1c16.25 0 30.05-9.94 35.22-25.34 5.16-15.39 0.14-31.65-12.83-41.44-117.83-89.01-381.37-240.32-849.34-283.48-6-0.56-11.25 0.2-16.85 2.38z"/>\n   <path fill="${a}" d="m2905.8 1438.2h384.13c16.25 0 30.05-9.94 35.22-25.33 5.16-15.41 0.14-31.66-12.83-41.45-34.2-25.84-80.71-56.93-140.89-89.08l-265.64 155.86z"/>\n   <path fill="#898890" d="m2091.4 1055.8-107.52 99.54c-3.07 2.85-4.58 6.51-4.42 10.68 0.17 4.18 1.95 7.72 5.23 10.31l45.02 35.72c3.98 3.15 8.96 3.9 13.67 2.03l387.77-153.35c5.63-2.23 9.04-7.56 8.73-13.59-0.32-6.03-4.28-10.98-10.11-12.59-53-14.68-164.94-30.98-332.86 18.14-2.15 0.64-3.87 1.6-5.52 3.12z"/>\n   <path fill="#33312c" d="m2231.1 1262.5c-45.67 0-82.89-37.24-82.89-82.91 0-45.66 37.22-82.89 82.89-82.89 45.66 0 82.9 37.23 82.9 82.89 0 45.67-37.24 82.91-82.9 82.91z"/>\n   <path fill="#898890" d="m2231.1 1248.4c-37.88 0-68.78-30.9-68.78-68.79 0-37.88 30.9-68.79 68.78-68.79s68.78 30.91 68.78 68.79-30.9 68.79-68.78 68.79z"/>\n   <polygon fill="${a}" points="4433.1 1406 4279.2 1406 4279.2 1374.4 4433.1 1374.4"/>\n   <polygon fill="${a}" points="923.36 1406 769.52 1406 769.52 1374.4 923.36 1374.4"/>\n   <path fill="#CE3247" d="m2058.9 1401.1-68.27-18.3c-1.37-0.36-2.7-0.1-3.85 0.78-1.12 0.86-1.73 2.09-1.73 3.51v27.85c0 1.33 0.51 2.46 1.52 3.33 1 0.87 2.21 1.23 3.52 1.04l68.26-9.55c2.1-0.3 3.68-1.99 3.81-4.12 0.12-2.13-1.23-4-3.28-4.55z"/>\n   <polygon fill="${a}" points="2677.9 107.08 2838.3 299.7 2939.2 305.79 2763.4 110.56"/>\n  \n</svg>\n\n `}},263:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=t=>{const{firstPage:e,currentPage:a,lastPage:n,cars:l}=t,o=document.createElement("div");o.className="garage";const c=`\n  <div class="container">\n    <div class ="controls-container">\n      <div>\n      <div class="cars-count">Garage ( ${l} cars )</div>\n      <div class="cars-count">\n      <button type="button"  data-button="pageControl prev">${e} < </button>\n      <button type="button"  data-button="pageControl current" disabled> ${a} </button>\n      <button type="button"  data-button="pageControl next"> > ${n} </button>\n\n\n      </div>\n      </div>\n      <div>\n        <div>\n        <form>\n          <input type="text" name="" data-create="name" required>\n          <input type="color" class ="pick-color" data-create="color">\n          <button type="button" class="fill-button" data-button="control create">Crete</button>\n          </form>\n          </div>\n        <div>\n        <form>\n          <input type="text" name=""  data-update="name" required>\n          <input type="hidden" name=""  data-update-id="">\n          <input type="color" class ="pick-color" data-update="color">\n          <button type="button" class="fill-button" data-button="control update">Update</button>\n        </form>\n          </div> \n      </div>\n      <div>\n        <button class="fill-button" data-button="control generate">Generate Cars Set</button>\n      </div>\n      <div>\n        <button class="fill-button" data-button="race">Race</button>\n        <button class="fill-button" data-button="reset">Reset</button>\n      </div> \n    </div>\n      <div class="tracks-container"></div>\n  </div>  \n`;return o.insertAdjacentHTML("beforeend",c),o}},157:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});const a=(()=>{const t=document.createElement("div");return t.className="top-scores",t.textContent="top-scores",t})();e.default=a},719:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={garageUrl:"http://localhost:3000/garage/",engineUrl:"http://localhost:3000/engine/",header:250,tracks:7,startPage:1,generateCars:100}},35:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(2)),c=l(a(949)),r=l(a(393));e.default=class{static index(){return n(this,void 0,void 0,(function*(){r.default.index(),o.default.home(),c.default.index()}))}}},609:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(805)),c=l(a(2)),r=a(222),i=l(a(78)),d=l(a(393));e.default=class{static index(t,e,a){c.default.car(t,e,a)}static createCar(t){o.default.createCar(t),d.default.addCar()}static updateCar(t,e){o.default.updateCar(t,e)}static delCar(t){o.default.delCar(t),d.default.delCar()}static generateCars(t){for(let e=0;e<t;e+=1)o.default.createCar({name:r.carNames[(0,i.default)(0,10)],color:r.carColors[(0,i.default)(0,10)]}),d.default.addCar()}static runCar(t){return n(this,void 0,void 0,(function*(){const e=yield o.default.runCar(t),a=e.distance/(1e3*e.velocity),n=document.querySelector(`[data-car="${t}"]`),l=document.body.clientWidth;n.style.transform=`translateX(${l-250}px)`,n.style.transition=`all ease-in ${a}s`}))}static backCar(t){return n(this,void 0,void 0,(function*(){const e=document.querySelector(`[data-car="${t}"]`);e.style.transform="translateX(0px)",e.style.transition="all ease-in 0.5s"}))}}},949:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(188)),c=l(a(805)),r=l(a(2)),i=l(a(139)),d=l(a(393));e.default=class{static index(){return n(this,void 0,void 0,(function*(){o.default.clearApp();const t=d.default.getPageData(),e=yield c.default.getPageOfCars(t.currentPage);r.default.garage(t,e),i.default.index(e)}))}}},393:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(719)),c=l(a(805)),r=l(a(265));e.default=class{static index(){return n(this,void 0,void 0,(function*(){console.log("pageController->index");const t=yield c.default.getAllCars();console.log(t.length,Math.ceil(t.length/o.default.tracks));const e={firstPage:1,currentPage:o.default.startPage,lastPage:Math.ceil(t.length/o.default.tracks),cars:t.length};r.default.saveToStorage("pageData",e)}))}static getPageData(){return r.default.loadFromStorage("pageData")}static addCar(){const t=r.default.loadFromStorage("pageData");t.cars+=1,t.cars%8==0&&(t.lastPage+=1),r.default.saveToStorage("pageData",t),console.log("pageController->addCar",t)}static delCar(){const t=r.default.loadFromStorage("pageData");t.cars-=1,t.cars%7==0&&t.cars>=7&&(t.lastPage-=1),r.default.saveToStorage("pageData",t),console.log("pageController->delCar",t)}static prevPage(){const t=r.default.loadFromStorage("pageData"),{firstPage:e,currentPage:a}=t;a!==e&&(t.currentPage-=1,r.default.saveToStorage("pageData",t))}static nextPage(){const t=r.default.loadFromStorage("pageData"),{currentPage:e,lastPage:a}=t;e!==a&&(t.currentPage+=1,r.default.saveToStorage("pageData",t))}}},927:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(188)),c=l(a(2));e.default=class{static index(){return n(this,void 0,void 0,(function*(){console.log("TopScoresController => index"),o.default.clearApp(),c.default.topScores()}))}}},139:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(719)),c=l(a(188)),r=l(a(2)),i=l(a(609));e.default=class{static index(t){return n(this,void 0,void 0,(function*(){const e=Math.trunc((window.innerHeight-o.default.header)/o.default.tracks),a=Math.trunc(e/30),n=e/3;c.default.clearGarage();for(let l=0;l<o.default.tracks;l+=1){r.default.carTrack(t[l],e,n,a,l);const o=document.querySelector(`[data-track="${l}"]`);null!==o&&t[l]&&i.default.index(o,t[l],e/2)}}))}}},222:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.carColors=e.carNames=void 0,e.carNames=["bmw","mers","tesla","opel","vw","mazda","toyota","honda","kia","hynday"],e.carColors=["#ffffff","#cccccc","#1abc9c","#ce1aaa","#000000","#0ceada","#10ab","#1656fa","#1fdf10","#ae3434"]},188:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class a{static delAllChildren(t){t.innerHTML=""}static clearApp(){const t=document.querySelector(".page-container");null!==t&&(t.innerHTML="")}static clearGarage(){const t=document.querySelector(".tracks-container");null!==t&&(t.innerHTML="")}static appendFromStringToDom(t,e){t.insertAdjacentHTML("beforeend",e)}}e.default=a,a.appendElemToDOM=(t,e)=>{const a=new DocumentFragment;Array.isArray(e)?a.append(...e):a.append(e),t.append(a)},a.delElemFromDOM=t=>{Array.isArray(t)?t.forEach((t=>{t.remove()})):t.remove()}},805:function(t,e,a){var n=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(l,o){function c(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?l(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}i((n=n.apply(t,e||[])).next())}))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=l(a(719));class c{static getAllCars(){return n(this,void 0,void 0,(function*(){let t=[];const e=yield fetch(o.default.garageUrl);return e.ok?t=yield e.json():alert(`Ошибка HTTP: ${e.status}`),t}))}static getPageOfCars(t){return n(this,void 0,void 0,(function*(){const e=yield c.getAllCars(),a=(t-1)*o.default.tracks,n=a+o.default.tracks;return e.slice(a,n)}))}static createCar(t){return n(this,void 0,void 0,(function*(){return(yield fetch(o.default.garageUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}))}static updateCar(t,e){return n(this,void 0,void 0,(function*(){return(yield fetch(`${o.default.garageUrl}${Number(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}))}static delCar(t){return n(this,void 0,void 0,(function*(){return(yield fetch(`${o.default.garageUrl}${Number(t)}`,{method:"DELETE"})).json()}))}static runCar(t){return n(this,void 0,void 0,(function*(){return(yield fetch(`${o.default.engineUrl}?id=${Number(t)}&status=started`,{method:"PATCH"})).json()}))}}e.default=c},265:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static saveToStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}static loadFromStorage(t){const e=localStorage.getItem(t);return null===e?null:JSON.parse(e)}}},78:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>Math.floor(Math.random()*e)+t},607:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),a(224);const l=n(a(35)),o=n(a(597));document.body.addEventListener("click",o.default.clickHandler),l.default.index()}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a(607)})();
//# sourceMappingURL=main.js.map