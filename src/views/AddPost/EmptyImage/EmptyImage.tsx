import { FaRegImage } from "react-icons/fa6";

const EmptyImage = () => {
  return (
    <div className="w-[150px] h-[150px] flex justify-center items-center shadow-primary rounded-xl">
        <FaRegImage className="w-8 h-8 text-gray-400"/>
    </div>
  )
}

export default EmptyImage