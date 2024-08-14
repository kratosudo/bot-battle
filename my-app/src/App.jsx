import React, { useState, useEffect} from 'react';
import BotCollection from "./Components/BotCollection.jsx";

import YourBotArmy from "./Components/YourBotArmy.jsx";


function App (){
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);

    //fetch bot data
    useEffect(() => {
        fetch("https://bots-s8ny.onrender.com/bots")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setBots(data);
        })
        .catch((error) => {
            console.error("Error fetching bot data", error);
        });
    }, []);


    //add to bot army
    const addToArmy = (selectBot) => {
        if (!army.includes(selectBot)) {
            setArmy((prevArmy) => [...prevArmy, selectBot]);
        };
    };

        //remove bot
        const releaseFromArmy = (releasedBot) => {
            setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== releasedBot.id));
        };

        //discharge bot from collection

        const dischargeBot = (botId) => {
            setBots((preBots) => preBots.filter((bot) => bot.id !== bot.id));
        };

    
    return (
        <div>
            <h1>War Bots</h1>
            <div>
                <BotCollection
                bots={bots}
                addToArmy={addToArmy}
                dischargeBot={dischargeBot}
                />
            </div>
            <div>
                <h2>Your Bot Army</h2>
                <YourBotArmy
                army={army}
                onReleaseFromArmy={releaseFromArmy} />
            </div>
        </div>
    );
};
export default App;