import { timeSince } from '../../../../helper/helper';
import './Comment.css';

export default function Comment({userId, createdAt, body}) {
    return (
        <>
            <div className="comment-body">
            <p className="text-base font-medium text-gray-500">@{userId} &nbsp; {timeSince(new Date(createdAt))} ago </p>
            <p className="text-base ml-3 font-medium ">{body}</p>
            </div>
        </>
    )
}