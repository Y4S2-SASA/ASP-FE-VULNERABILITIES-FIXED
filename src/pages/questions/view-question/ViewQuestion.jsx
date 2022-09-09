import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteQuestionById, getQuestionById } from "../../../api/QuestionsApi";
import Dialog from "../../../components/dialog/Dialog";
import DialogTitle from "../../../components/dialog/DialogTitle";
import DialogContent from "../../../components/dialog/DialogContent";
import DialogActions from "../../../components/dialog/DialogActions";
import NavBar from "../../../components/LayoutComponents/NavBar";
import QuestionCard from "../view-question/QuestionCard";
import Button from "../../../components/buttons/Buttons";
import { applyToast } from "../../../components/toast-message/toast";
import EditQuestion from "../edit-question.jsx/EditQuestion";

export default function ViewQuestion() {
    const { id } = useParams();
    const [question, setQuestions] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [deleteModelOpen, setDeleteModelOpen] = useState(false);    
    const [editModelOpen, setEditModelOpen] = useState(false);

    useEffect(() => {
        fetchQuestion(id);
    }, []);

    const handleDeleteQuestion = () => {
        deleteQuestionById(id)
            .then(() => window.location.href = "/questions")
            .catch(() => applyToast());
    }

    const fetchQuestion = (id) => {
        getQuestionById(id)
            .then(res => {
                setQuestions(res.data.data);
                setLoading(false);
            });
    }
    return (
        <>
            <NavBar />
            <br />
            <div className="bg-gray-100">
                <br />
                
                {deleteModelOpen && <>
                    <Dialog onClose={() => setDeleteModelOpen(false)}>
                        <DialogTitle>
                            Delete Question
                        </DialogTitle>
                        <DialogContent>
                            Are you sure you want to delete this questions?
                        </DialogContent>
                        <DialogActions>
                            <Button variant={"alternative"} onClick={() => setDeleteModelOpen(false)}>Close</Button>
                            <Button onClick={handleDeleteQuestion}>Delete</Button>
                        </DialogActions>
                    </Dialog>
                    </>
                }
                {editModelOpen &&
                    <Dialog onClose={() => setEditModelOpen(false)}>
                        <EditQuestion 
                            questionObject={question}
                            setEditModelOpen={setEditModelOpen}
                        />
                    </Dialog>
                }
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
                            onEdit={() => setEditModelOpen(true)}
                            onDelete={() => setDeleteModelOpen(true)}
                        />
                    }
                </div>
                <br />
            </div>
            <br />
        </>
    )
}