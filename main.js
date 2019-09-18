let index = 0 ;

function addToDo() {
    let value = document.getElementById( 'Add-input' ).value ;
    let divFirst = document.createElement( 'div' ) ;
    let div = document.createElement( 'div' ) ;
    divFirst.className = `div-for-p-center  ${index}` ;
    divFirst.setAttribute( "onclick" , "doedAdd( this)" ) ;
    div.className = `Added-div ${index}` ;
    inputToDo.after( div ) ;
    let paragraf = document.createElement( 'p' ) ;
    paragraf.className = 'Added-text' ;
    div.append( divFirst ) ;
    divFirst.append( paragraf ) ;
    paragraf.append( value ) ;
    let deleteButton = document.createElement( 'input' ) ;
    deleteButton.type = 'button' ;
    deleteButton.id = `${index}` ;
    deleteButton.className = 'Delete-button' ;
    deleteButton.value = 'Delete' ;
    deleteButton.setAttribute( "onclick" , "item( this.id )" ) ;
    div.append( deleteButton ) ;
    document.getElementById( 'Add-input' ).value = '' ;
    index++ ;
}

function item(index) {
    let deleteElements = document.querySelectorAll('.Added-div') ;
    for ( let key of deleteElements ) {
        if ( `Added-div ${index}` === key.className ) {
            key.remove() ;
        }
    }
}

let isTrue = true ;
function doedAdd( index ) {
    let arr = document.querySelectorAll( '.div-for-p-center' ) ;
    console.log( index.className.length ) ;
    if ( index.className.length < 25 ) {
        isTrue = true ;
    } else {
        isTrue = false ;
    }
    if ( isTrue ) {
        for ( let key of arr ) {
            if ( key.className === index.className ) {
                index.className = `${key.className} click-paragraf` ;
                isTrue = false ;
                console.log( isTrue ) ;
            }
        }
    } else {
        for ( let key of arr ) {
            if ( key.className === index.className ) {
                index.className = `div-for-p-center` ;
                isTrue = true ;
            }
        }
    }
}

// window.addEventListener('load', function () {
//     const list = JSON.parse(localStorage.getItem('data') || '[]');
//     const continer = document.getElementById('conteiner');
//     function selectItem(event, index) {
//         list[index].status = !list[index].status;
//         const div = event.target;
//         if(list[index].status) {
//             div.classList.add('click-paragraf');
//         } else {
//             div.classList.remove('click-paragraf');
//         }
//         localStorage.setItem('data', JSON.stringify(list));
//     }

//     function removeItem(event, index) {
//         list.splice(index, 1);
//         const button = event.target;
//         console.log(button);
//         button.parentElement.remove();
//         localStorage.setItem('data', JSON.stringify(list));
//     }

//     function addItem() {
//         let value = document.getElementById('Add-input').value;
//         const index = list.push({text: value, status: 0 }) - 1;
//         continer.appendChild(createDiv({text: value, status: 0}, index));
//         document.getElementById('Add-input').value = '';
//         localStorage.setItem('data', JSON.stringify(list));
//     }

//     function createDiv({ text, status }, index) {
//         const p = document.createElement('P');
//         p.innerText = text;
//         const divfirst = document.createElement('DIV');
//         divfirst.setAttribute('class', 'div-for-p-center' + (status? ' click-paragraf' : ''));
//         divfirst.addEventListener('click', function (e) {
//             selectItem(e, index)
//         });
//         divfirst.appendChild(p)
//         const div = document.createElement('DIV');
//         div.setAttribute('class', 'Added-div');
//         const button = document.createElement('button');
//         button.setAttribute('class', 'Delete-button');
//         button.innerText = 'Delate';
//         button.addEventListener('click', (e) => removeItem(e, index));
//         div.appendChild(divfirst);
//         div.appendChild(button);
//         return div;
//     }

//     function Print() {
//         list.forEach((item, index) => {
//             continer.appendChild(createDiv(item, index));
//         }, this)
//     }
//     Print();
//     document.getElementById('Add-button').addEventListener('click', addItem)
// })