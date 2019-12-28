function print_Array (arr) {
      let create_List = arr => {
            let ul = document.createElement("ul");

            if (Array.isArray(arr)) {
                  arr.map( item => {
                        let li = document.createElement("li");
                        if(item === null) {
                              li.innerText = `null`;
                        }
                        else if(typeof item === 'object') {
                              li.appendChild(create_List(item));
                        }
                        else {
                              li.innerText = `${item}`;
                        }
                        ul.appendChild(li);
                  });
            }
            else {
                  for(let key in arr) {
                        let li = document.createElement("li");
                        if(arr[key] === null) {
                              li.innerText = `${key} : null`;
                        }
                        else if (arr[key] === 'object') {
                              li.innerText = `${key} : `;
                              li.appendChild(create_List(arr[key]));
                        }
                        else {
                              li.innerText = `${key} : ${arr[key]}`;
                        }
                        ul.appendChild(li);
                  }
            }
            return ul;
      }

      document.body.appendChild(create_List(arr));
}

let Arr = [1, 2 ,3, ['Baku', 'Azerbaijan', 'IBA Tech'], {firstname: 'Nijat', lastname: 'Ismayilov', occupation: 'Student' }, null, [undefined, null, ['trying', 'array', 'inside', undefined, {key: 'loading', status: 'hard'}]]];
print_Array(Arr);

