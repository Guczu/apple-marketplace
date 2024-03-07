import Header from "../../components/Header/Header"
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import PrimaryTextarea from "../../components/PrimaryTextarea/PrimaryTextarea";
import SelectList from "../../components/SelectList/SelectList";
import EmptyImage from "./EmptyImage/EmptyImage"
import { CiCirclePlus } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const AddPost = () => {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center gap-8 border-t-2 p-4 mb-12'>
        <Header styles="pt-12 pb-6">
            Dodaj ogłoszenie!
        </Header>

        <div className="flex flex-row items-center gap-4">
            <label htmlFor="image" className="w-[150px] h-[150px] flex justify-center items-center shadow-primary rounded-xl hover:cursor-pointer hover:animate-grow-up">
                <CiCirclePlus className="w-8 h-8 text-gray-500"/>
            </label>
            <input type="file" id="image" className="hidden" />

            <FaLongArrowAltRight className="w-8 h-8 text-gray-400" />

            <EmptyImage />
            <EmptyImage />
            <EmptyImage />
            <EmptyImage />
            <EmptyImage />
        </div>

        <div className='w-full flex flex-col items-center gap-6 bg-white p-12 rounded-xl z-50'>
            <span className='text-[16px] lg:text-[24px] font-medium'>Tytuł ogłoszenia</span>
            <PrimaryInput id="title" placeholder="Wpisz tytuł ogłoszenia" styles="flex flex-col w-1/2" />
            
            <span className='text-[16px] lg:text-[24px] font-medium'>Opis ogłoszenia</span>
            <PrimaryTextarea id="description" placeholder="Wpisz opis ogłoszenia" styles="flex flex-col w-1/2 min-h-[300px] resize-none" />

            <span className='text-[16px] lg:text-[24px] font-medium'>Cena</span>
            <PrimaryInput id="price" placeholder="Wpisz cenę [PLN]" styles="flex flex-col w-1/6" />

            <span className='text-[16px] lg:text-[24px] font-medium'>Kategoria</span>
            <SelectList id="category" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="Mac">Mac</option>
                    <option value="iPad">iPad</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Watch">Watch</option>
                    <option value="AirPods">AirPods</option>
                </>
            </SelectList>

            <span className='text-[16px] lg:text-[24px] font-medium'>Model</span>
            <SelectList id="product" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="model">Model</option>
                </>
            </SelectList>

            <span className='text-[16px] lg:text-[24px] font-medium'>Stan</span>
            <SelectList id="condition" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="Używany">Używany</option>
                    <option value="Nowy">Nowy</option>
                    <option value="Uszkodzony">Uszkodzony</option>
                </>
            </SelectList>


            <PrimaryButton styles="w-1/6 mt-4">
                <span>Dodaj ogłoszenie</span>
            </PrimaryButton>
        </div>

    </section>
  )
}

export default AddPost