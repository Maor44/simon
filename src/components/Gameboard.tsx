import React, { useEffect } from 'react';
import {Button} from './Button';
import {COLORS, SOUNDS} from '../constants';

interface GameBoardProps {
    setBestScore: React.Dispatch<React.SetStateAction<number>>
}

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const GameBoard = ({setBestScore}:GameBoardProps) => {
    const [gameStarted, setGameStarted] = React.useState(false);
    const [computerColors, setComputerColors] = React.useState<string[]>([]);
    const [userColors, setUserColors] = React.useState<string[]>([]);
    const [activeColor, setActiveColor] = React.useState<string | null>(null);
    const [computerTurn, setComputerTurn] = React.useState(true);

    const startHandle = () => {
        setGameStarted(true);
    }

    const createComputerFlow = () => {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        setComputerColors(prevState => [...prevState, randomColor]);
    }

    const handleUserClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        const copyColors = [...userColors];
        const lastColor = copyColors.pop();

        if (lastColor === name) {
            await SOUNDS[name].play();
            if(copyColors.length){
                setUserColors(copyColors);
            }else {
                setComputerTurn(true);
                setUserColors([]);
                setBestScore(prevState => prevState + 1);
                await timeout(899);
                createComputerFlow();
            }
        }
        else {
            setComputerColors([]);
            setUserColors([]);
            setGameStarted(false);
        }
    }

    useEffect(() => {
        if (gameStarted) {
            createComputerFlow();
        }
    }, [gameStarted]);

    useEffect(() => {
        (async () => {
            for(let [index, color] of computerColors.entries()) {
                await SOUNDS[color].play();
                setActiveColor(color);
                await timeout(400);
                setActiveColor(null)
                await timeout(400);
                if(index === computerColors.length - 1) {
                    const copyColors = [...computerColors];
                    setComputerTurn(false);
                    setUserColors(copyColors.reverse());
                }
            }
        })()
    }, [computerColors.length]);

    return (
        <>
            <button disabled={!gameStarted || computerTurn } name='green' onMouseDown={handleUserClick} className={`${activeColor === 'green' ? 'bg-green-700' : 'bg-green-500'} absolute w-3/6 h-3/6 -top-1.5 -left-1.5 active:bg-green-600 md:hover:bg-green-600`} />
            <button disabled={!gameStarted || computerTurn } name='red' onMouseDown={handleUserClick} className={`${activeColor === 'red' ? 'bg-red-700' : 'bg-red-500'} absolute w-3/6 h-3/6 -top-1.5 -right-1.5 active:bg-red-600 md:hover:bg-red-600`} />
            <button disabled={!gameStarted || computerTurn } name='yellow' onMouseDown={handleUserClick} className={`${activeColor === 'yellow' ? 'bg-yellow-700' : 'bg-yellow-500'} absolute w-3/6 h-3/6 -bottom-1.5 -left-1.5 active:bg-yellow-600 md:hover:bg-yellow-600`} />
            <button disabled={!gameStarted || computerTurn } name='blue' onMouseDown={handleUserClick} className={`${activeColor === 'blue' ? 'bg-blue-700' : 'bg-blue-500'} absolute w-3/6 h-3/6 -bottom-1.5 -right-1.5 active:bg-blue-600 md:hover:bg-blue-600`} />
            <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-36 h-36 bg-black rounded-full flex justify-center items-center'>
                {!gameStarted && <Button mode={'start'} onClick={startHandle}/>}
            </div>
        </>
    );
};

export {GameBoard};