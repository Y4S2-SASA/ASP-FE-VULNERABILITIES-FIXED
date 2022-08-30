import './index.css';

export default function Loader() {
    
    return (
        <center>
            <div className="loading hover:scale-110 transition duration-300 ease-in-out drop-shadow-2xl"><div></div><div></div><div></div></div>
            <div className='font-mono antialiased font-semibold uppercase text-lg'>Loading...</div>
        </center>
    );
}