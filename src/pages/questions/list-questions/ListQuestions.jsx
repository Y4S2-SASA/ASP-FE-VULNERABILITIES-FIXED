import { useEffect, useState } from "react";
import { getAllQuestions } from "../../../api/QuestionsApi";
import NavBar from "../../../components/LayoutComponents/NavBar";
import QuestionCard from "./QuestionCard";

export default function ListQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    handleFetchQuestions();
  }, []);

  const handleFetchQuestions = () => {
    getAllQuestions()
      .then(res => {
        setQuestions(res.data.data);
      });
  }

  return (
    <>
      <NavBar />
      {questions && questions.map((question, index) => {
        console.log(question)
        return (      
          <div className="mx-72 mb-4">
            <QuestionCard 
              title={question.title}
              createdBy={question.createdBy}
              numOfViews={question.numOfViews}
              tags={question.tags}
              imageUrl={question.imageUrl}
              createdAt={question.createdAt}
            />
          </div>
        )
      })}
    </>
  );
}