import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function PressButton(){
        const text = messageRef.current.value;
        alert(`Text in input ${text}`)
    }

    function PressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child Component</p>

            <button onClick={() => console.log('Pressed Button 1')}>Botón 1</button>

            <button onClick={PressButton}>Botón 2</button>
            {/* Para pasar una función que tiene un parámetro como la de PressButtonParams,
            es mejor que se haga a través una función anónima, es decir, () => PressButtonParams('text'),
            sino, el mensaje va a salir desplegado siempre en pantalla sin necesidad de que hayamos
            hecho click */}
            <button onClick={() => PressButtonParams('Hello')}>Botón 3</button>

            <input 
                onFocus={() => console.log('Input Focused')} 
                onChange={(e) => console.log('Input Changed', e.target.value)} 
                onCopy={() => console.log('Copied text from input')}
                placeholder='Send a text to your father'
                ref = {messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}>Send Message</button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
