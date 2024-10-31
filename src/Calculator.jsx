import React, { useState } from 'react';
import axios from 'axios';
import './calculator.css';  

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const operators = ['+', '-', '*', '/', '%', '^'];
    const specialOperators = ['sqrt(','1/'] ;


    const handleClick = async (value) => {

        if (value === 'C' || value === 'CE') {
            clearExpression() ;
        } else if (value === '=') {
            await equalhandle() ;
        } else if (value === 'B') {
            removelast() ;
        } else if (operators.includes(value)) {
            handleOperator(value) ;
        } else if(specialOperators.includes(value)) {
            handleSpecialOperator(value);
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

    const equalhandle = async () => {
        const res = await myeval() ;
        setResult(res);
        setExpression('');
        return res ;
    }

    const clearExpression = () => {
        setExpression('');
        setResult('');
    }

    const removelast = () => {
        
        if(expression === ''){
            setResult('') ;
        }
        else if (expression.endsWith("sqrt(")) {
          setExpression(expression.slice(0, -5));
        }
        else{
          setExpression(expression.slice(0, -1));
        }
      };

    const handleOperator = async (value) => {
        
        if(operators.some(op => expression.includes(op)) || expression.includes('sqrt(') ){
            const res = await myeval() ;
            setExpression(res + value) ;
        } else {
            if( expression === '' ){
                setExpression(result + value) ;
            } else{
                setExpression( prev => prev + value ) ;
            }
        }
        return "" ;
    }

    const handleSpecialOperator = async (value) => {

        const res = await handleOperator('');
        setExpression(prev => res + value + prev) ;

    }
    
    

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
                <button onClick={() => handleClick('sqrt(')}>√x</button>
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
