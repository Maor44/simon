import greenSoundFile from './assets/sounds/green.mp3';
import redSoundFile from './assets/sounds/red.mp3';
import yellowSoundFile from './assets/sounds/yellow.mp3';
import blueSoundFile from './assets/sounds/blue.mp3';

export const COLORS = ['green', 'red', 'yellow', 'blue'];
export const SOUNDS: {[key: string]: HTMLAudioElement} = {
    'green': new Audio(greenSoundFile),
    'red': new Audio(redSoundFile),
    'yellow': new Audio(yellowSoundFile),
    'blue': new Audio(blueSoundFile)
};

