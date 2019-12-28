let buttons = document.querySelectorAll('.btn');

window.addEventListener('keydown', event => {
      switch(event.key) {
            case 'Enter':
                  buttons[0].style.backgroundColor = 'blue';
                  break;
            case 's':
                  buttons[1].style.backgroundColor = 'blue';
                  break;
            case 'e':
                  buttons[2].style.backgroundColor = 'blue';
                  break;
            case 'o':
                  buttons[3].style.backgroundColor = 'blue';
                  break;
            case 'n':
                  buttons[4].style.backgroundColor = 'blue';
                  break;
            case 'l':
                  buttons[5].style.backgroundColor = 'blue';
                  break;
            case 'z':
                  buttons[6].style.backgroundColor = 'blue';
                  break;
      };
})

window.addEventListener('keyup', event => {
      switch (event.key) {
            case 'Enter':
                  buttons[0].style.backgroundColor = '';
                  break;
            case 's':
                  buttons[1].style.backgroundColor = '';
                  break;
            case 'e':
                  buttons[2].style.backgroundColor = '';
                  break;
            case 'o':
                  buttons[3].style.backgroundColor = '';
                  break;
            case 'n':
                  buttons[4].style.backgroundColor = '';
                  break;
            case 'l':
                  buttons[5].style.backgroundColor = '';
                  break;
            case 'z':
                  buttons[6].style.backgroundColor = '';
                  break;
      };
})