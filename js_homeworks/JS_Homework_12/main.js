let imgs = document.querySelector('.images-wrapper');

for(let i = 0; i < imgs.children.length; i++) {
      imgs.children[i].hidden = true;
      if(i == 0) {
            imgs.children[i].hidden = false;
      }
}

let counter = 0;
let timeout = 10000;
let intervalID;
let timerID;


function setting_interval() {
      timer.innerText = '10.00';
      timerID = setInterval(() => {
            let timer_time = Number(timer.innerText);
            timer.innerText = `${(timer_time - 0.01).toFixed(2)}`;
      }, 10);
      intervalID = setTimeout( function interval() {
            timer.innerText = '10';
            imgs.children[counter].hidden = true;
            if(counter == 3) {
                  counter = 0;
            }
            else {
                  counter++;
            }
            imgs.children[counter].hidden = false;
            intervalID = setTimeout( interval, timeout);
      }, timeout);
}

let stop_btn = document.createElement('button');
let resume_btn = document.createElement('button');
let timer = document.createElement('p');

stop_btn.innerText = 'Stop';
resume_btn.innerText = 'Resume';
resume_btn.disabled = true;

stop_btn.style.marginTop = '10px';
stop_btn.style.marginRight = '10px';

resume_btn.style.marginTop = '10px';
resume_btn.style.marginRight = '10px';


document.body.appendChild(stop_btn);
document.body.appendChild(resume_btn);
document.body.appendChild(timer);

stop_btn.addEventListener('click', () => {
      clearTimeout(intervalID);
      clearInterval(timerID);
      stop_btn.disabled = true;
      resume_btn.disabled = false;
})

resume_btn.addEventListener('click', () => {
      setting_interval();
      resume_btn.disabled = true;
      stop_btn.disabled = false;
})

setting_interval();