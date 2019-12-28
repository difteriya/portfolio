let styles = document.querySelector('.page-styles')

if(localStorage.length > 0) {
      if (localStorage.getItem('style_state') == 'alternative') {
            styles.href = "../css/stylesAlternative.css";
      }
}
else {
      localStorage.setItem('style_state', 'default');
}

let change_button = document.querySelector('.clear-button');

change_button.addEventListener('click', () => {
      if(localStorage.getItem('style_state') == 'alternative') {
            localStorage.setItem('style_state', 'default');
            styles.href = "../css/styles.css";
      }
      else {
            localStorage.setItem('style_state', 'alternative');
            styles.href = "../css/stylesAlternative.css";
      }
})


