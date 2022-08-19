import { useEffect , useState} from "react";
import { useContext } from "react"
import { AuthContext } from "../../App"
import NavBar from "../../components/LayoutComponents/NavBar";
import itemRequest from "../../api/Item/item.request";
import Button from "../../components/buttons/Buttons";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Items = () => {
    // With this AuthContext you can get the currently logged in user's details
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;

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

      // const callouts = [
      //   {
      //     name: 'Steering Wheel',
      //     description: 'A good choice for your vehicle. Contact us through mobile number - 0761234567',
      //     imageSrc: 'https://carfromjapan.com/wp-content/uploads/2018/03/hard-steering-wheel.jpg',
      //     price: '17,000',
      //     availability: '7'
      //   },
      //   {
      //     name: 'Car Seat',
      //     description: 'A good choice for your vehicle. Contact us through mobile number - 0761234567',
      //     imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/BMW_Alpina_B3_Biturbo_E92-Leder-Vordersitze_in_Dakota-braun.jpg/1200px-BMW_Alpina_B3_Biturbo_E92-Leder-Vordersitze_in_Dakota-braun.jpg',
      //     price: '8000',
      //     availability: '10'
      //   },
      //   {
      //     name: 'Gear Box - pro',
      //     description: 'Most commonly purchased gear box in colombo and matara. Contact - 011 8965412',
      //     imageSrc: 'https://www.thecarexpert.co.uk/wp-content/uploads/2020/10/audi-r8-manual-gearbox-2-1200x900-cropped.jpg',
      //     price: '150,000',
      //     availability: '4'
      //   },
      //   {
      //     name: 'Bicycle - Handlebar',
      //     description: 'A good choice for your vehicle. Contact us through mobile number - 0761234567',
      //     imageSrc: 'https://cdn.mos.cms.futurecdn.net/UnPWk9vbVsDuJnk3Y2ftmd-1200-80.jpg',
      //     price: '17,000',
      //     availability: '7'
      //   },
      //   {
      //     name: 'Bicycle Tyres',
      //     description: 'A good choice for your vehicle. Contact us through mobile number - 0761234567',
      //     imageSrc: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/05/Tyre-best-list-thumbnail-e41d0f7.jpg?quality=45&resize=768,574',
      //     price: '8000',
      //     availability: '10'
      //   },
      //   {
      //     name: 'Three wheeler seat',
      //     description: 'Most commonly purchased gear box in colombo and matara. Contact - 011 8965412',
      //     imageSrc: 'https://www.riyasakwala.lk/public/images/vehicle_ad/415/AD000422-2.jpeg',
      //     price: '150,000',
      //     availability: '4'
      //   },
      //   {
      //     name: 'Gear Box - pro',
      //     description: 'Most commonly purchased gear box in colombo and matara. Contact - 011 8965412',
      //     imageSrc: 'https://www.thecarexpert.co.uk/wp-content/uploads/2020/10/audi-r8-manual-gearbox-2-1200x900-cropped.jpg',
      //     price: '150,000',
      //     availability: '4'
      //   },
      // ]

    return (
        <>
        <NavBar />
            {/* <h1>Items</h1>
            <h2>logged in user - {userId}</h2>
            <h2>logged in user's role - {role}</h2> */}
      <br/>
        <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-16 sm:px-16 lg:px-2">
          <div className="max-w-2xl mx-auto py-10 lg:max-w-none">

           <div className="py-2">
           <Button><div className="text-xl">Create your Item</div> </Button>
           </div>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {item.map((i) => (
                <div key={i.id} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={i.imageUrl}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                  <div className="cursor-pointer"><Button>Add to cart</Button></div>
                  
                  <div className="flex center-items text-3xl pt-2">
                  <div className="pr-5 cursor-pointer"><BsPencilSquare/></div>
                  <div className="pr-5 cursor-pointer"><BsFillTrashFill/></div>
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
              ))}
            </div>
          </div>
        </div>
      </div>
        
        <br/><br/>
        
        </>
    )
}

export default Items;