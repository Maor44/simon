import React from 'react';
import {Title} from './components/Title';
import {GameBoard} from './components/Gameboard';

const App = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-slate-800'>
            <h2 className='font-display text-2xl text-white tracking-widest text-center mb-10 absolute top-2 left-2'>Best Score: 0</h2>
            <Title title='simon' />
            <div className='w-96 h-96 bg-black rounded-full relative overflow-hidden'>
                <GameBoard />
            </div>

        </div>
    );
};

export default App;