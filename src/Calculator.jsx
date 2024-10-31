import React, { useState } from 'react';
import axios from 'axios';
import './calculator.css';  

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');
    const operators = ['+', '-', '*', '/', '%', '^','^0.5','1/'];


    const handleClick = async (value) => {
        if (value === 'C' || value === 'CE') {
            setExpression('');
            setResult('0');
        } else if (value === '=') {
            const res = await myeval() ;
            setResult(res);
            setExpression('');
        } else if (value === 'B') {
            setExpression((prev) => prev.slice(0, -1));
        } else if (operators.includes(value)) {
            if (operators.some(op => expression.includes(op))){
                    const res = await myeval() ;
                    setResult(res); 
                    setExpression(res + value);
            } else{
                if(expression === ''){
                    setExpression(result + value);
                } else {
                    setExpression((prev) => prev + value);
                }
            }
        } else {
            setExpression((prev) => prev + value);
        }
    };
    
    const myeval = async () => {
        try {
    
            const response = await axios.post('http://localhost:8080/api/eval', {
                data: expression
            });

            return response.data.data ;

        } catch (error) {
            return "Error" ;
        }
    };
    
    

    return (
        <div className="calculator">
            <div className="calculator-screen">
                <span className="result">{expression || result}</span>
            </div>
            <div className="calculator-buttons">
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('CE')}>CE</button>
                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('B')}>←</button>
                <button onClick={() => handleClick('1/')}>1/x</button>
                <button onClick={() => handleClick('^')}>x<sup>□</sup></button>
                <button onClick={() => handleClick('^0.5')}>√x</button>
                <button onClick={() => handleClick('/')}>÷</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>×</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>−</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button id="equal-button" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
