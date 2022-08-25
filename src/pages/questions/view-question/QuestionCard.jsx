import { timeSince } from "../../../helper/helper";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from "../../../App";
import { useContext } from "react";

export default function QuestionCard({ title, createdAt, createdBy, onEdit, imageUrl, tags, onDelete, description }) {
    const loggedInUser = useContext(AuthContext);
    const { userId } = loggedInUser;
    return (
        <>
            <div
                className=""
            >
                <div className="flex justify-between ...">
                    <p className="text-base font-medium text-gray-600">@{createdBy.username} &nbsp; {timeSince(new Date(createdAt))} ago </p>
                    {userId == createdBy._id &&
                        <div className="text-3xl flex justify-between ...">
                            <div className="pr-5 cursor-pointer" onClick={onEdit}><BsPencilSquare /></div>
                            <div className="cursor-pointer" onClick={onDelete}><BsFillTrashFill /></div>
                        </div>
                    }
                </div>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-base font-medium text-gray-400">
                    {tags.map(tag => {
                        return (
                            <>
                                #{tag} &nbsp;
                            </>
                        )
                    })}
                </p>
                <div className="bg-cover">
                    <img className="rounded-lg" src={imageUrl} />
                </div>
                <div>
                    <p className="text-slate-600 text-lg m-3">{description}</p>
                </div>
                <div class="flex justify-end ...">
                    <p className="text-slate-400 text-sm">25 Comments </p>
                </div>
            </div>
        </>
    );
}