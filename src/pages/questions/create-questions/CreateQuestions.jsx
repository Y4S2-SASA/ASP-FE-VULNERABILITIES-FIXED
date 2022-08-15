import { useContext, useState } from "react"
import { TagsInput } from "react-tag-input-component";
import { AuthContext } from "../../../App";
import Button from "../../../components/buttons/Buttons";
import NavBar from "../../../components/LayoutComponents/NavBar";
import "./CreateQuestions.css"

export default function CreateQuestions() {
    const loggedInUser = useContext(AuthContext);
    const { userId, role } = loggedInUser;
    const [selected, setSelected] = useState(["tags"]);
    const [image, setImage] = useState();

    return (
        <>
            <NavBar />
            <div className="create-questions-container">
                <h1 className="text-2xl mb-4">Create Question</h1>
                <div className="create-questions-form-container">
                    <form>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Question Title
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Description (optional)
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Describe your question..."
                                defaultValue={""}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="create-question-tags-container">
                                <label
                                    htmlFor="repeat-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Add Tags
                                </label>
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="fruits"
                                    placeHolder="Enter tags"
                                />
                            </div>
                            <div className="create-question-image-input-container">
                                <label
                                    htmlFor="repeat-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Add Image
                                </label>
                                <input
                                    className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    type="file"
                                    size="80"
                                // onChange={(e) => onUploadImgToCloudinary(e.target.files[0])}
                                />
                            </div>

                        </div>
                        <div class="flex justify-end ...">
                            <div className="mr-2">
                                <Button variant="alternative">Cancel</Button>
                            </div>
                            <Button>Save</Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}