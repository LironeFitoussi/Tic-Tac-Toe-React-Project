import { useState } from "react"

export default function Player({ initName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    const handleEditClick = () => {
        setIsEditing((editing => !editing));
        
        if(isEditing) {
            onChangeName(symbol, playerName)
        };
    };

    const handlechange = (e) => {
        // console.log(e);
        setPlayerName(e.target.value)
    };

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handlechange} />
    };

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}