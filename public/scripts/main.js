import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDesc = document.querySelector('.modal p');
const modalBtn = document.querySelector('.modal button');

//Pegar todos os botões que possuem check
//Pegar momento de quando uma msg já foi lida
const checkBtn = document.querySelectorAll('.action a.check');
// const deleteBtn = document.querySelectorAll('a.delete');

checkBtn.forEach( btn =>
{
    btn.addEventListener( 'click', handleClick );
});

//Quando o btn excluir for pressionado, ele também abre a modal!
const deleteBtn = document.querySelectorAll( '.action a.delete' );

deleteBtn.forEach( btn =>
{
    btn.addEventListener( 'click', ( event ) => handleClick( event, false ) );
});

function handleClick( event, check = true )
{
    event.preventDefault();

    const txt = check ? "Marcar como lida" : "Excluir";
    const slug = check ? 'check' : 'delete';
    const roomId = document.querySelector('#room-id').dataset.id;
    const questionID = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/room/${roomId}/${questionID}/${slug}`);
    //Abre o modal
    modal.open();

    modalTitle.innerHTML = `${ txt } está pergutna?`;
    modalDesc.innerHTML = `Tem certza que deseja ${ txt.toLowerCase() } essa pergunta?`;
    modalBtn.innerHTML = check ? "Sim" : "Sim, excluir";
    modalBtn.style.background = check ? "var( --blue )"  : "var( --red )";
}
