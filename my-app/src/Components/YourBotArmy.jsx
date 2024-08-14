import React from "react";
import BotCollection from "./BotCollection.jsx";
import BotProfile from './BotProfile';


function YourBotArmy({army, onReleaseFromArmy, }) {
    return (
      <div>
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotProfile bot={bot} /> 
            <button onClick={() => onReleaseFromArmy(bot)}>Release</button>

          </div>

        ))}
      </div>
    );
    
};
export default YourBotArmy;