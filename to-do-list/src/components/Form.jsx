import { useState } from "react";

export default function Form({onAddActivity}){
const [kegiatan, setKegiatan] = useState("");

function handleSubmit(e){
    e.preventDefault();

    if(!kegiatan) return;

    const newKegiatan = {
    kegiatan: kegiatan,
    checked: false,
    id: Date.now() 
    }

    setKegiatan("");

    onAddActivity(newKegiatan);
}

return (
    <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <input placeholder="Masukkan kegiatan..." type="text" value={kegiatan} onChange={(e) => setKegiatan(e.target.value)}/>
            <button type="submit">
                Tambah
            </button>
        </form>
    </div>
)
}