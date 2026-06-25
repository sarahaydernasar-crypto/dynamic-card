let arr=['fff','ddd','eee','kkk']
let num=[1,2,3,4]
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';
function elm(num,nums) {
    
    // Function let implementation
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let numtetx = document.createElement('p');
    let img = document.createElement('img');
    let head=document.createTextNode(num);
    let numText=document.createTextNode(nums);
    img.src='imag4.jpg';
    title.appendChild(head);
    numtetx.appendChild(numText);
    card.style.width='300px';
    img.style.width='100%';
    card.style.background='#444';
    card.style.margin='2px';
    card.appendChild(title);

    card.appendChild(numtetx);
    card.appendChild(img);
    container.appendChild(card);
}
for(let i=0;i<4;i++)
     {
    elm(arr[i],num[i]);
}
