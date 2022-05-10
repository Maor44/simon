import React from 'react';
import {Title} from './components/Title';
import {GameBoard} from './components/Gameboard';

const App = () => {
    const [bestScore, setBestScore] = React.useState(0);
    return (
        <div className='flex flex-col items-center justify-center pb-10 h-screen w-screen bg-slate-800'>
            <h2 className='font-display text-2xl text-white tracking-widest text-center mb-10 absolute top-2 left-2'>Best Score: {bestScore}</h2>
            <Title title='simon' />
            <div className='w-80 h-80 px-3 bg-black rounded-full relative overflow-hidden md:w-96 md:h-96'>
                <GameBoard setBestScore={setBestScore} />
            </div>

        </div>
    );
};

export default App;