import React from 'react';

interface ButtonProps {
    mode: 'start' | 'restart';
    onClick: () => void;
}

const Button = ({mode, onClick}: ButtonProps) => {
    return (
        <button className='block w-full h-full font-display text-2xl text-black tracking-wider' onClick={onClick}>
            {mode.toUpperCase()}
        </button>
    );
};

export {Button};