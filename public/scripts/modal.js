export default function Modal()
{
    let wrapper = document.querySelector('.modal-wrapper');
    let cancel = document.querySelector( '.button.cancel' );

    cancel.addEventListener( 'click', close );

    function open()
    {
        //funcionalidade de atribuir classe
        //active na modal
        wrapper.classList.add( 'active' );
    }

    function close()
    {
        //Faz o inverso do open()
        wrapper.classList.remove( 'active' );
    }

    return{ open, close }
}
