"use client"
import toast, { Toaster } from 'react-hot-toast';


const notify = (message: string) => {
    return toast(message, {
        duration: 4000,
        position: 'top-right',
        icon: '👏',
        style: { backgroundColor: "blueviolet" }
    })
};
// const notify = (message: string) => toast(message);

const Toasted = () => {
    return (
        <div className="flex flex-col space-y-4 max-w-xs mx-auto mt-20">
            <Toaster />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => notify('Start')}
            >
                Start
            </button>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => notify('Stop')}
            >
                Stop
            </button>
            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => notify('Pause')}
            >
                Pause
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => notify('Resume')}
            >
                Resume
            </button>
        </div>
    )
}

export default Toasted