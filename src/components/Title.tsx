import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
    return (
        <h1 className='font-display text-6xl text-white tracking-widest text-center mb-10'>
            {title.toUpperCase()}
        </h1>
    );
};

export {Title};