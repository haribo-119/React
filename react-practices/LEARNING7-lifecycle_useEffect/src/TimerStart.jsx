import './App.css'
import {useState} from 'react'
import Timer from './Timer'


// 4) useEffect 언마운트 
const TimerStart = () => {
    const [showTimer, setShowTimer]
    = useState(false)

    return (
        <>
            <label>
                <input
                    type ="checkbox"
                    checked= {showTimer}
                    onChange = {
                        (e) => setShowTimer(
                            e.target.checked
                        )}/>
                Show Timer
            </label>
            {showTimer && <Timer/>}
        </>
    )
}

export default TimerStart