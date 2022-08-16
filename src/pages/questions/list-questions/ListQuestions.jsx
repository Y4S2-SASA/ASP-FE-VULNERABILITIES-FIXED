import QuestionCard from "./QuestionCard";

export default function ListQuestions() {
  return (
    <>
      <div className="mx-72 mb-4">
        <QuestionCard />
      </div><div className="mx-72 mb-4">
        <QuestionCard />
      </div>
    </>
  );
}