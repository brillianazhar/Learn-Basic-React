export default function Footer({activities}){
    if(activities.length <= 0){
        return (
        <div className="footer">
            Belum ada daftar kegiatan
        </div>
        )
    }

    const finish = activities.filter(a => a.checked == true).length;
    const sisa = activities.length - finish;
    const total = activities.length
    const persen = Math.round((finish/total)*100);

    return(
        <div className="footer">
            Ada {sisa} kegiatan yang belum dikerjakan, {finish} kegiatan selesai dikerjakan ({persen}%)
        </div>
    )
}