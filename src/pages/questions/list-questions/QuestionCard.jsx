import { timeSince } from "../../../helper/helper";
import './QuestionCard.css';

export default function QuestionCard({ title, createdAt, createdBy, numOfViews, imageUrl, tags, _id }) {
    return (
        <>
            <a
                href={`view-question/${_id}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <div className="flex justify-between ...">
                    <p className="text-slate-400 text-sm">@{createdBy.username} &nbsp; {timeSince(new Date(createdAt))} ago </p>
                    <p className="text-slate-400 text-sm">{numOfViews} Views </p>
                </div>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-slate-400 text-sm">
                    {tags.map(tag => {
                        return (
                            <>
                                #{tag} &nbsp;
                            </>
                        )
                    })}
                </p>
                <div className="geeks">
                    <img className="image" src={imageUrl} />
                </div>
                <div class="flex justify-end ...">
                    <p className="text-slate-400 text-sm">25 Comments </p>
                </div>
            </a>
        </>
    );
}