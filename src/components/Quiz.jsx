import { useState, useEffect } from "react";

const Quiz = ({ setCurrentPage, questions, setResults }) => {

    const [answers, setAnswers] = useState({});


    const handleSetAnswers = (id, answer) => {
        setAnswers((prev) => ({ ...prev, [id]: answer }))
    }

    useEffect(() => {
        console.log(answers);
    }, [answers]);


    const compareRightAnswers = () => {
        let countRightAnswers = 0
        const rightAnswers = questions.map(question => question.options[question.correctAnswer])

        rightAnswers.forEach((rightAnswer, i) => {
            console.log(`${rightAnswer}-${answers[i]}`);
            if (rightAnswer === answers[i]) {
                countRightAnswers = countRightAnswers + 1
                console.log('ok');
            } else {
                console.log('not ok');
            }
        })
        setResults(`${countRightAnswers}/${rightAnswers.length}`)
        setCurrentPage('resultsPage')
    }

    return (
        <>
            {questions.map((question, index) => {
                return (
                    <div key={index}>
                        <p>{question.quest}</p>
                        {question.options.map((option, i) => {
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        value={option}
                                        name={`question-${index}`}
                                        checked={answers[index] === option}
                                        onChange={e => handleSetAnswers(index, e.target.value)}
                                    />
                                    {option}
                                </label>
                            )
                        })}

                    </div>
                )
            })}
            <button onClick={compareRightAnswers}>Завершить попытку</button>
        </>
    );
};

export default Quiz;