"use client";

import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleButtonClick = (value: string) => {
        setInput((prev) => prev + value);
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculateResult = () => {
        try {
            const evalResult = Function(`'use strict'; return (${input})`)();
            setResult(evalResult);
            setInput('');
        } catch (error) {
            setResult('Error');
            setInput('');
        }
    };

    return (
        <div className="container mt-5">
            
            <div className="card">
                <div className="card-body">
                <h2 className="text-center">Calculator</h2>
                    <div className="display-4 text-right">{input || '0'}</div>
                    <div className="display-4 text-right mb-4">{result && `= ${result}`}</div>
                    <div className="row">
                        {[
                            ['7', '4', '1', '+'],
                            ['8', '5', '2', '-'],
                            ['9', '6', '3', '*'],
                            ['0', '/', 'C', '=']
                        ].map((row, rowIndex) => (
                            <div className="col" key={rowIndex}>
                                {row.map((value) => (
                                    <button
                                        key={value}
                                        className={`btn btn-light btn-block ${value === 'C' ? 'btn-danger' : value === '=' ? 'btn-success' : ''}`}
                                        onClick={() => {
                                            if (value === 'C') {
                                                clearInput();
                                            } else if (value === '=') {
                                                calculateResult();
                                            } else {
                                                handleButtonClick(value);
                                            }
                                        }}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
