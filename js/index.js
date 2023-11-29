/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
  }
  
 const keyObj = Object.keys(myObject);

  keyObj.forEach(key => {
     if(key === 'key3' || key === 'key1'){
       console.log(myObject[key]);
     }
  });

  

  let a = 'first'
  let b = 'second'

console.log(a, b);
// first second
 [b, a] = [a, b]

console.log(a, b)
// second first



  customElements.define('counter-element', class extends HTMLElement{
     constructor(){
       super();
       this.isRender = false;
       this.counter = 0;
     }
     render(){
        const parent = document.createElement('div');
         parent.classList.add('counter');
         parent.style.display = 'flex';
         parent.style.fontSize = 18 + 'px';
         parent.style.color = '#fff';
         parent.style.alignItems = 'center';

        const btnM = document.createElement('button');
         btnM.classList.add('counter__btn', 'counter__btn-m');
        btnM.textContent = 'Уменьшить';
         btnM.style.padding = '12px 31px';
         btnM.style.background = 'red';
         btnM.style.marginRight = 10 + 'px';
         btnM.style.color = '#fff';

        const btnP = document.createElement('button');
          btnP.classList.add('counter__btn', 'counter__btn-p');
         btnP.textContent = 'Увеличить';
         btnP.style.padding = '12px 31px';
         btnP.style.background = 'blue';
         btnP.style.marginLeft = 10 + 'px';
         btnP.style.color = '#fff';

         const counter = document.createElement('span');
          counter.textContent = this.counter;
        
        parent.appendChild(btnM);
        parent.appendChild(counter);
        parent.appendChild(btnP);

        btnM.addEventListener('click', () => {
         this.counter--;
         counter.textContent = this.counter;
        });

       btnP.addEventListener('click', () => {
         this.counter++;
        counter.textContent = this.counter;
       });

         return parent;
    }
     connectedCallback(){
      this.attachShadow({mode: 'open'});
  
          if(!this.isRender){
            this.shadowRoot.appendChild(this.render());
             this.isRender = true;
              console.log(this);
          }
    
        }
  });


  class HelloButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => console.log(1254));
    }
     connectedCallback(){
      this.style.background = 'green';
      this.style.padding = '12px 31px';
      this.style.color = '#fff';
      this.style.fontSize = '18px';
      this.style.textAlign = 'center';
      this.style.borderRadius = '6px';
     }
  }

  customElements.define('text-element', class extends HTMLElement{
     constructor(){
         super();
     }
     connectedCallback() {
      const template = document.getElementById('temp');
       this.attachShadow({mode: 'open'}).append(template.content.cloneNode(true));
        const element = document.createElement('div');
          element.textContent = '1212';
           let counts = 0;
            function hundleClickFour(){
               counts++
                if(counts === 4){
                   const hundle = new CustomEvent('click-es', {bubbles: true, composed: true, detail: {massage: 'LOL'}});
                    document.dispatchEvent(hundle);
                    counts = 0;
                }                  
            }
            document.addEventListener('click', hundleClickFour);
             console.log(document.addEventListener('click-es', (event) => console.log(event.detail.massage + '12')));
           this.shadowRoot.appendChild(element);
           document.addEventListener('my-event', (event) => console.log(event.detail.massage));
         this.shadowRoot.addEventListener('slotchange', (e) => {
           let slot = e.target;
            if(slot.name === 'item'){
               console.log(slot.assingedNodes().assingedSlot());
            } 
         });
    }
  });

  customElements.define('info-card', class extends HTMLElement {
    constructor() {
      super();
      this.isRender = false;
    }
  
    render() {
      const parentElement = document.createElement('div');
      parentElement.style.color = '#fff';
      parentElement.style.width = '300px';
      parentElement.style.height = '400px';
      parentElement.style.background = 'green';
      parentElement.style.display = 'flex';
      parentElement.style.alignItems = 'center';
      parentElement.style.justifyContent = 'center';
      parentElement.style.flexDirection = 'column';
      parentElement.style.textAlign = 'center';
  
      const slotTitle = document.createElement('slot');
      slotTitle.setAttribute('name', 'card-title');
  
      const content = document.createElement('div');
  
      const slotName = document.createElement('slot');
      slotName.setAttribute('name', 'card-name');
  
      const slotPrice = document.createElement('slot');
      slotPrice.setAttribute('name', 'card-price');

      slotPrice.addEventListener('click', () => {
        const priceElement = slotPrice.assignedNodes();
         if(priceElement.length > 0){
           priceElement[0].textContent = '2100$';
         }
      });
  
      parentElement.appendChild(slotTitle);
      parentElement.appendChild(content);
      content.appendChild(slotName);
      content.appendChild(slotPrice);
  
      return parentElement;
    }
  
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      if (!this.isRender) {
        this.shadowRoot.appendChild(this.render());
        this.isRender = true;
      }
    }
  });
  
  customElements.define('hello-button', HelloButton, {extends: 'button'});
  

  // customElements.define('counter-element', class extends HTMLElement {
  //   constructor() {
  //     super();
  //     this.isRendered = false;
  //     this.counter = 120;
  //   }
  
  //   render() {
  //     const div = document.createElement('div');
  //     div.classList.add('counter');
  
  //     const btnM = document.createElement('button');
  //     btnM.classList.add('counter__btn-m', 'counter__btn');
  //     btnM.textContent = 'Уменьшить';
  //     btnM.style.backgroundColor = 'red';
  //     btnM.style.marginRight = '10px';
  
  //     const span = document.createElement('span');
  //     span.textContent = this.counter;
  
  //     const btnP = document.createElement('button');
  //     btnP.classList.add('counter__btn-p', 'counter__btn');
  //     btnP.textContent = 'Увеличить';
  //     btnP.style.backgroundColor = 'blue';
  //     btnP.style.marginLeft = '10px';
  
  //     div.appendChild(btnM);
  //     div.appendChild(span);
  //     div.appendChild(btnP);
  
  //     return div;
  //   }
  
  //   connectedCallback() {
  //     this.attachShadow({ mode: 'open' });
  
  //     if (!this.isRendered) {
  //       this.shadowRoot.appendChild(this.render());
  //       this.isRendered = true;
  
  //       const btnWhoM = this.shadowRoot.querySelector('.counter__btn-m');
  //       const btnWhoP = this.shadowRoot.querySelector('.counter__btn-p');
  
  //       btnWhoM.addEventListener('click', () => {
  //         this.counter--;
  //         this.shadowRoot.replaceChild(this.render(), this.shadowRoot.firstChild);
  //       });
  
  //       btnWhoP.addEventListener('click', () => {
  //         this.counter++;
  //         this.shadowRoot.replaceChild(this.render(), this.shadowRoot.firstChild);
  //       });
  //     }
  //   }
  // });

  function flatten(array){
     const newArray = [];
   
         for(let i = 0; i < array.length; i++){
             if(Array.isArray(array[i])){
                const res = flatten(array[i]);
                 for(let i  = 0; i < res.length; i++){
                     newArray.push(res[i]);
                 }
             }  else{
                 newArray.push(array[i]);
             }
         }
        
       
      return newArray;
  }

   console.log(flatten([[1], [[2,3]], [[[[4]]]]]))







//    return( `
//    <style>
//      .counter{
//        display: flex;
//        font-size: 18px;
//        color: #fff;
//        align-items: center;
//      }
//      .counter__btn{
//         padding: 12px 31px 12px 31px;
//         text-align: center;
//         color: #fff;
//      }
//      .counter__btn-m{
//        background-color: red;
//        margin-right: 10px;
//      }
//      .counter__btn-p{
//        background-color: blue;
//        margin-left: 10px;
//      }
//    </style>
//     <div class='counter'>
//       <button class='counter__btn-m counter__btn'>Уменьшить</button>
//        <span>${this.counter}</span>
//       <button class='counter__btn-p counter__btn'>Увеличить</button>
//      </div>
//  `);




// this.shadowRoot.innerHTML = `
// <style>
//   .card-info{
//      color: #fff;
//      width: 300px;
//      height: 400px;
//      background-color: green;
//      border-radius: 12px;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      flex-direction: column;
//      text-align: center;
//   }
//   slot[name='card-title'] {
//     font-size: 20px;
//     letter-spacing: 0.5px;
//   }
//   slot[name='card-name'] {
//     font-size: 18px;
//  }
//  slot[name='card-price'] {
//    font-size: 16px;
//    color: red;
//    font-weight: 700;
//  }
//  </style>
//  <div class='card-info'>
//      <slot name='card-title'></slot>
//     <div>
//       <slot name='card-name'></slot>
//       <slot name='card-price'></slot>
//     </div>
//  <div>
// `