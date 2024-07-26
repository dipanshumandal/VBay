import ImageCard from "./ImageCard"
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const ProductGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold my-14 ">Products</h3>
        {/* Inside this div we will put products */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
            {/* Product Card */}
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
            <ImageCard title="The Product" author="Dipanshu" img="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" price={20} icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
} />
        </div>
    </div>
  )
}

export default ProductGallery