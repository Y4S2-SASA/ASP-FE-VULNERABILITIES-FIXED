import { timeSince } from '../../../../helper/helper';
import './Comment.css';

export default function Comment() {
    return (
        <>
            <div className="comment-body">
            <p className="text-base font-medium text-gray-500">@{'Shehan'} &nbsp; {timeSince(new Date())} ago </p>
            <p className="text-base ml-3 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
            </div>
        </>
    )
}