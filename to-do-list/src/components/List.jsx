import { useState } from "react";
import Item from "./Item";

export default function List({activities, onDeleteActivity, onToggle, onClearAll}){
    const [sortBy, setSortBy] = useState("input");
    let sortedActivities;

    switch(sortBy){
        case "name" :
        sortedActivities = activities.slice().sort((a,b) => a.kegiatan.localeCompare(b.kegiatan));
        break;
        case "checked" :
        sortedActivities = activities.slice().sort((a,b) => a.checked - b.checked);
        break;
        default :
        sortedActivities = activities;
        break;
    }

    return (
        <div className="list">
            <div className="action">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Order by Input</option>
                    <option value="name">Order by Name</option>
                    <option value="checked">Order by Checked</option>
                </select>
                <button onClick={onClearAll}>
                    Clear All
                </button>
            </div>
            <ul>
                {sortedActivities.map(activities => (
                <Item key={activities.id} activities={activities} onDeleteActivity={onDeleteActivity} onToggle={onToggle}/>
                ))}
            </ul>
        </div>
    )
}