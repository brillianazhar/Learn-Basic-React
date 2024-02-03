import { useState } from "react"
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";





export default function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activity){
    setActivities([...activities, activity]);
  }

  function handleDeleteActivity(id){
    setActivities((activities) => activities.filter(activity => activity.id !== id));
  }

  function handleToggle(id){
    setActivities((activities) => activities.map(activity => activity.id == id ? {...activity, checked: !activity.checked} : activity))
  }

  function handleClearAll(){
    setActivities([]);
  }

  return (
    <>
      <div className="container">
          <Header />
          <Form onAddActivity={handleAddActivity}/>
          <List activities={activities} onDeleteActivity={handleDeleteActivity} onToggle={handleToggle} onClearAll={handleClearAll}/>
          <Footer activities={activities} />
      </div>
    </>
  )
}
