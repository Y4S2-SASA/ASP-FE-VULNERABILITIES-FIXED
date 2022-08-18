import { timeSince } from "../../../helper/helper";

export default function QuestionCard({title, createdAt, createdBy, numOfViews, imageUrl, tags, _id, description}) {
    return (
        <>
            <div
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <div class="flex justify-between ...">
                    <p className="text-slate-400 text-sm">@{createdBy} &nbsp; {timeSince(new Date(createdAt))} ago </p>
                    <div className="mx-4">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-slate-400 text-sm">
                    {tags.map(tag => {
                        return(
                            <>
                                #{tag} &nbsp;
                            </>
                        )
                    })}
                </p>
                <div className="flex justify-center">
                    <img className="max-h-96" src={imageUrl} />
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