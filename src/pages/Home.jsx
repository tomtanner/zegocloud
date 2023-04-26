import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[roomCode,setRoomCode]=useState("");
    const navigate=useNavigate();

    const handleFormSubmit=()=>{
        // ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }

    return (
        <div className="home-page">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Enter Room Code</label>
                    <input type="text" required placeholder="Enter Room Code" 
                    value={roomCode}
                    onChange={(e)=>setRoomCode(e.target.value)}
                    />
                </div><input type="submit" />
            </form>

        </div>
    )
}
export default Home
