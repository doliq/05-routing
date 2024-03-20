export default function Profile() {
    const biodata = {
        name : "Diwa Arsyad Atthoriq",
        class : "3A",
        nim : "2141720222",
    };

    return(
        <div>
            <h1>Welcome to my profile !</h1>
            <h2>Nama:   {biodata.name}</h2>
            <h2>Kelas:   {biodata.class}</h2>
            <h2>NIM:   {biodata.nim}</h2>
        </div>
    )
  }