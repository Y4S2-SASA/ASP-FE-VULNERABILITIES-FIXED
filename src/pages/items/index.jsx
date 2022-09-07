import { useEffect , useState} from "react";
import { useContext } from "react"
import { AuthContext } from "../../App"
import NavBar from "../../components/LayoutComponents/NavBar";
import itemRequest from "../../api/Item/item.request";
import Button from "../../components/buttons/Buttons";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { applyToast } from '../../components/toast-message/toast';
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/search-box/SearchBox";

const Items = () => {
    // With this AuthContext you can get the currently logged in user's details
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;
    const navigate = useNavigate();

    const initialState = [
      {
        name: "",
        price: "",
        quantity: "",
        description: "",
        imageUrl: "",
        createdBy: "",
      },
    ];

    const [item, setItem] = useState(initialState);

    useEffect(() => {
        itemRequest.getItems().then((res) => {
          console.log("Item page: Index: useEffect")
          console.log(res);
          setItem(res.data.data);
        });
      }, []);

      const deleteItem = (id) => {
        console.log(id);
        itemRequest.deleteItem(id).then((res)=> {
            console.log(res);
            applyToast('Item successfully deleted!', 'success');
            window.location.reload();
        })
      }

    return (
        <>
        <NavBar />
            {/* <h1>Items</h1>
            <h2>logged in user - {userId}</h2>
            <h2>logged in user's role - {role}</h2> */}
      <br/>
        <div className="">
        <div className="max-w-7xl mx-auto px-16 sm:px-16 lg:px-2">
          <div className="max-w-2xl mx-auto py-10 lg:max-w-none">

          <div className="flex justify-between py-2">
          <div>
          <SearchBox/>
          </div>
          <div>
          <Button><div className="text-xl"><a href="/createitem">Create your Item</a></div> </Button>
          </div>
           </div>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {item.map((i) => {
                return (
                  <div className="bg-gray-100 px-4">
                  <div key={i._id} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={i.imageUrl}
                        className="w-full h-full object-center object-cover" />
                    </div>

                    <div className="flex justify-between pt-4">
                      <div className="cursor-pointer">
                        <Link to={`/reserve/${i._id}`}><Button>Add to cart</Button></Link>
                      </div>

                      <div className="flex center-items text-3xl pt-2">
                        <div className="pr-5 cursor-pointer text-gray-900" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Request"><BsPencilSquare data-bs-toggle="modal" data-bs-target="#updateReservationDetails" /></div>
                        <div className="pr-5 cursor-pointer text-red-800" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Request"><BsFillTrashFill data-bs-toggle="modal" data-bs-target={`#deleteReservationDetails${i._id}`} /></div>
                      </div>

                    </div>


                    <h3 className="mt-2 text-xl text-gray-900 font-semibold">
                      {i.name}
                    </h3>
                    <h3 className="mt-0 text-lg text-gray-600 font-semibold">
                      LKR {i.price} | Availability - {i.quantity}
                    </h3>
                    <p className="text-base font-medium text-gray-900 mt-2 mb-24">{i.description}</p>
                    </div>
                    <div>
                      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto text-gray-900" id={`deleteReservationDetails${i._id}`} tabIndex={-1} aria-modal="true" role="dialog">
                        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                              <h5 className="text-xl font-medium leading-normal text-gray-800">
                                Delete Item Details
                              </h5>
                              <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-toggle="tooltip" data-bs-placement="top" title="Close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body relative p-5">
                              Are you sure that you want to delete this item?<br />
                              This Action cannot be undone !
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                              <div className="transition duration-150 ease-in-out px-3" data-bs-dismiss="modal">
                                <Button variant={'alternative'}>Close</Button>
                              </div>
                              <div className='transition duration-150 ease-in-out ml-1' data-bs-dismiss="modal">
                                <Button onClick={() => deleteItem(i._id)}>Delete</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

            
        
        <br/><br/>
        
        </>
    )
}

export default Items;