import React from "react";
import BotProfile from "./BotProfile";


function BotCollection ({ bots, addToArmy, dischargeBot }) {
   
    return (
        <div className="card-container">
            <h2>Bot Collection</h2>
            {bots.map((bot) => (
                <div key={bot.id} className="bot-card">
                    <BotProfile bot={bot} />
                    <button onClick={() => addToArmy(bot)}>Add to Army</button>
                    <button onClick={() => dischargeBot(bot.id)}>Discharge</button>

                </div>


            ))}

        </div>
     
    );
    

}
export default BotCollection;