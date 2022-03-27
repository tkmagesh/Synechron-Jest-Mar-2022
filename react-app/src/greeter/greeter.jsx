import { useState } from 'react';

const Greeter = () => {
    const [greetMsg, setGreetMsg] = useState('');
    const [userName, setUserName] = useState('');

    const onGreetClick = () => {
        setGreetMsg(`Hi ${userName}!`)
    };
    return(
        <>
            <h3>Greeter</h3>
            <hr></hr>
            <label htmlFor="txtUserName">User Name :</label>
            <input type="text" id="txtUserName" onChange={ evt => setUserName(evt.target.value)} />
            <button onClick={onGreetClick}>Greet</button>
            <div data-testid="divGreetMessage">
                {greetMsg}
            </div>
        </>
    )
}

export default Greeter;