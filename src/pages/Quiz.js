import '../assets/style/quiz.css';
import React, { useEffect, useState } from 'react';
import Questions from '../data/Questions';

let array = Object.entries(Questions);
const questionsList = array[0][1];
questionsList.sort(() => Math.random() - 0.5);
const timeToAnswer = 10;

const Quiz = () => {
    const [questionState, setQuestionState] = useState(1);
    const [statement, setStatement] = useState('');
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedOption, setSelectedOption] = useState(100);
    const [time, setTime] = useState(0);
    const [timeLimit, setTimeLimit] = useState(false);
    const [score, setScore] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(
        questionsList[questionState - 1]['answer'],
    );

    let questionAnswer = questionsList[questionState - 1]['answer'];
    const generateQuestion = () => {
        if (selected === true || questionState === 1) {
            setSelected(false);
            setQuestionState(questionState + 1);
            setOptions(questionsList[questionState]['options']);
            setStatement(questionsList[questionState]['statement']);
            setSelectedOption(100);
            setTime(0);
            setTimeLimit(false);
        }
    };

    const Options = ({ options }) => {
        if (questionAnswer != trueAnswer) {
            setTrueAnswer(questionAnswer);
        }
        function scoring(answer) {
            if (selected === false) {
                if (answer) {
                    if (answer.target.value === trueAnswer) {
                        setScore(score + 1);
                    }
                    setSelectedOption(answer.target.id);
                    setSelected(true);
                }
            }
        }
        const GenerateOptions = (props) => {
            let selection;
            let selectionBadAnswer;
            let goodAnswer;
            return options.map(
                (option, index) => (
                    (selection = props.selected == index ? 'selected' : ''),
                    (selectionBadAnswer =
                        props.selected == index && option != trueAnswer
                            ? 'badAnswer'
                            : ''),
                    (goodAnswer =
                        selected && trueAnswer == option ? 'goodAnswer' : ''),
                    (
                        <>
                            <button
                                key={index}
                                id={index}
                                onClick={scoring}
                                value={option}
                                className={`btn btn-primary ${selection} ${selectionBadAnswer} ${goodAnswer}`}
                            >
                                {option}
                            </button>
                        </>
                    )
                ),
            );
        };
        useEffect(() => {
            const timer = setInterval(() => {
                if (time < timeToAnswer && selected === false) {
                    setTime((prevTime) => prevTime + 1);
                }
            }, 1000);

            return () => {
                if (time === timeToAnswer && !timeLimit) {
                    setSelected(true);
                    setTimeLimit(true);
                }
                clearInterval(timer);
            };
        }, []);
        return (
            <>
                <GenerateOptions selected={selectedOption} />
            </>
        );
    };

    if (questionState === 1) {
        generateQuestion();
    }
    if (questionState < 12) {
        return (
            <>
                <div className="section">
                    {statement}
                    <div>Score : {score}</div>
                    <div className="options">
                        <Options
                            questionAnswer={questionAnswer}
                            options={options}
                        />
                    </div>
                    <button id="toggle" onClick={generateQuestion}>
                        Suivant
                    </button>
                    <div>
                    <meter id="fuel"
                        min="0" max={timeToAnswer}
                        low={timeToAnswer*.4} high={timeToAnswer*.7} optimum={timeToAnswer}
                        value={time}>

       </meter></div>
                    <div>{questionState - 1}/10</div>
                </div>
            </>
        );
    } else if (questionState === 12) {
        let result;
        if (score < 5) {
            result = 'Approfondissez vos connaissances pour vous améliorer !';
        } else if (score < 10) {
            result =
                'Joli score ! Encore un petit effort pour être un expert !';
        } else if (score === 10) {
            result = "Félicitations, vous êtes un expert de l'espace !";
        }
        return (
            <>
                <div className="section">
                    <div>Score final {score}</div>
                    <div>{result}</div>
                </div>
            </>
        );
    }
};

<>
    <Quiz />
</>;

export default Quiz;
