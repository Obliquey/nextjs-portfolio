'client';

// how can this work?
// 1. Take a string, return a char, add next char, return again, etc. 

export default function Typewriter(string:string, i = 0): any {
    if(i === string.length - 1) {
        return;
    }
    setTimeout(() => Typewriter(string, i + 1), 50);
}