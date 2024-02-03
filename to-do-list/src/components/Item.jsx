export default function Item({activities, onDeleteActivity, onToggle}){
return (
    <li key={activities.id}>
        <input  type="checkbox" onChange={() => onToggle(activities.id)} checked={activities.checked}/>
        <span style={activities.checked ? {textDecoration : "line-through"} : {}}>{activities.kegiatan}</span>
        <button className="asd" onClick={() => onDeleteActivity(activities.id)}>&times;</button>
    </li>
)
}
  