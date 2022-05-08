import React from 'react';
import {Button} from './Button';

const GameBoard = () => {
    const classes = 'absolute w-3/6 h-3/6'
    return (
        <>
            <button className={`${classes} -top-1.5 -left-1.5 bg-green-500 hover:bg-green-600`} />
            <button className={`${classes} -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600`} />
            <button className={`${classes} -bottom-1.5 -left-1.5 bg-yellow-500 hover:bg-yellow-600`} />
            <button className={`${classes} -bottom-1.5 -right-1.5 bg-blue-500 hover:bg-blue-600`} />
            <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-36 h-36 bg-white rounded-full flex justify-center items-center'>
                <Button mode='start' onClick={() => console.log('start')}/>
            </div>
        </>
    );
};

export {GameBoard};