export default function QuestionCard() {
    return (
        <>
            <a
                href="#"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <div class="flex justify-between ...">
                    <p className="text-slate-400 text-sm">@Shehanx86 &nbsp; 11 hours ago </p>
                    <p className="text-slate-400 text-sm">25 Views </p>
                </div>
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    My Bugatti is not working. Dulshan broke it. Here's a pic of my Bugatti
                </h5>
                <p className="text-slate-400 text-sm">#cars &nbsp; #honda &nbsp; #engine</p>
                <div className="flex justify-center">
                    <img className="max-w-lg max-h-sm" src="https://www.bugatti.com/fileadmin/_processed_/9/5/csm_HEADER_22de7ed3a8.jpg" />
                </div>
                <div class="flex justify-end ...">
                    <p className="text-slate-400 text-sm">25 Comments </p>
                </div>
            </a>
        </>
    );
}