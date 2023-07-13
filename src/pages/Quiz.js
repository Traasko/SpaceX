import '../style/quiz.css';
import React, { useEffect, useState } from 'react';
import Questions from '../data/Questions';

let array = Object.entries(Questions);
const questionsList = array[0][1];
questionsList.sort(() => Math.random() - 0.5);

const Quiz = (answer) => {
    const [questionState, setQuestionState] = useState(1);
    const [statement, setStatement] = useState('');
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(false);
    const [score, setScore] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(
        questionsList[questionState - 1]['answer'],
    );

    let questionAnswer = questionsList[questionState - 1]['answer'];
    const generateQuestion = (answer) => {
        if (selected === true || questionState === 1) {
            setQuestionState(questionState + 1);
            setOptions(questionsList[questionState]['options']);
            setStatement(questionsList[questionState]['statement']);
        }
    };

    const Options = ({ options }) => {
        const [selectedOption, setSelectedOption] = useState({ selected: '' });

        if (questionAnswer != trueAnswer) {
            setTrueAnswer(questionAnswer);
            setSelected(false);
        }
        function scoring(answer) {
            if (selected === false) {
                if (answer) {
                    console.log(answer.target.id);
                    if (answer.target.value === trueAnswer) {
                        console.log('Correct !');
                        setScore(score + 1);
                    } else {
                        console.log('Incorrect...');
                    }
                    setSelected(true);
                    setSelectedOption({
                        ...selectedOption,
                        select: answer.target.id,
                    });
                }
            }
        }
        const GenerateOptions = (props) => {
            console.log(props.selectedOption);
            return (
                <>
                    {options.map((option, index) => (
                        <>
                            <button
                                key={index}
                                id={index}
                                onClick={scoring}
                                value={option}
                                className={
                                    props.selectedOption === index
                                        ? 'selected'
                                        : ''
                                }
                            >
                                {option}
                            </button>
                        </>
                    ))}
                </>
            );
        };
        return (
            <>
                <GenerateOptions selected={selectedOption} />
            </>
        );
    };

    if (questionState === 1) {
        generateQuestion();
    }
    return (
        <>
            {statement}
            <div>Score : {score}</div>
            <div className="options">
                <Options questionAnswer={questionAnswer} options={options} />
            </div>
            <button id="toggle" onClick={generateQuestion}>
                Suivant
            </button>
        </>
    );
};

<>
    <Quiz />
</>;

export default Quiz;
