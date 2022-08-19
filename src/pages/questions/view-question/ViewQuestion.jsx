import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../../../api/QuestionsApi";
import NavBar from "../../../components/LayoutComponents/NavBar";
import QuestionCard from "../view-question/QuestionCard";

export default function ViewQuestion() {
    const { id } = useParams();
    const [question, setQuestions] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuestion(id);
    }, []);

    const fetchQuestion = (id) => {
        getQuestionById(id)
            .then(res => {
                setQuestions(res.data.data);
                console.log(res.data.data)
                setLoading(false);
            });
    }
    return (
        <>
            <NavBar />
            <br />
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-16 sm:px-16 lg:px-2">
                    {!isLoading &&
                        <QuestionCard
                            title={question.title}
                            createdBy={question.createdBy}
                            numOfViews={question.numOfViews}
                            tags={question.tags}
                            imageUrl={question.imageUrl}
                            createdAt={question.createdAt}
                            _id={question._id}
                            description={question.description}
                            onEdit={() => console.log('editing')}
                            onDelete={() => console.log('deleting')}
                        />
                    }
                </div>
            </div>
        </>
    )
}