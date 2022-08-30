import { useEffect, useState } from "react";
import { getAllQuestions } from "../../../api/QuestionsApi";
import Button from "../../../components/buttons/Buttons";
import NavBar from "../../../components/LayoutComponents/NavBar";
import SearchBox from "../../../components/search-box/SearchBox";
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
      <br />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-16 sm:px-16 lg:px-2">
          <div className="max-w-2xl mx-auto py-10 lg:max-w-none">
            <div className="flex justify-between ...">
              <SearchBox />
              <Button onClick={() => window.location.href='/create-question'}><div className="text-xl">Create Question</div></Button>
            </div>

            <div className="py-10">
              {questions && questions.map((question, index) => {
                console.log(question)
                return (
                  <div className="mb-3">
                    <QuestionCard
                      title={question.title}
                      createdBy={question.createdBy}
                      numOfViews={question.numOfViews}
                      tags={question.tags}
                      imageUrl={question.imageUrl}
                      createdAt={question.createdAt}
                      _id={question._id}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
}