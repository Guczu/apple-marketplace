import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import PostCategory from './PostCategory/PostCategory';
import PostImages from './PostImages/PostImages'
import { FaRegHeart } from "react-icons/fa";

const PostDetails = () => {
  return (
    <section className='container w-full mb-12 flex flex-col mx-auto'>
        <div className='w-full flex flex-row mx-auto'>
          <div className='w-1/3 mx-auto'>
            <PostImages />
          </div>
          <div className='w-1/2 flex justify-center items-start'>
            <div className='w-2/3 h-full flex flex-col shadow-primary mt-8 p-8 gap-4'>

              <div className='flex justify-between'>
                <span className='text-gray-600'>Dodane: 09.03.2024 o 15:30</span>
                <FaRegHeart className='w-6 h-6 hover:text-red-600 hover:cursor-pointer' />
              </div>

              <div>
                <span className='text-[36px]'>4299 zł</span>
              </div>

              <div className='flex items-center justify-center mt-8 mb-8 gap-8'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                alt="profile picture" 
                className='w-24 h-24' 
                />

                <div className='flex flex-col text-[20px]'>
                  <span>Nickname</span>
                  <span>Ocena: 4</span>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center gap-4'>
                <PrimaryButton styles='w-2/3 h-[55px]' animation={true}>
                  <span>Wyślij wiadomość</span>
                </PrimaryButton>

                <PrimaryButton styles='w-2/3 h-[55px]' animation={true}>
                  <span>Zobacz profil</span>
                </PrimaryButton>
              </div>

            </div>
          </div>
        </div>

        <div className='w-full flex flex-col mt-12 p-12 gap-8'>
          <span className='text-[36px]'>A long title of product details - iPhone 15 Pro 2024</span>

          <div className='flex gap-4'>
            <PostCategory />
            <PostCategory />
            <PostCategory />
            <PostCategory />
            <PostCategory />
          </div>

          <span className='text-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius posuere blandit. Proin id eros sit amet sem iaculis ullamcorper. Cras sollicitudin magna non lectus suscipit, eu congue nisl placerat. Proin enim quam, venenatis at tristique eu, pulvinar id sem. Vivamus lobortis pharetra est, quis bibendum dui accumsan at. Donec maximus facilisis ligula vitae pulvinar. Nam malesuada, massa eu finibus cursus, dolor leo ultrices quam, vitae tincidunt magna erat ut leo. Sed augue turpis, hendrerit non est eget, aliquet ornare quam. Vivamus varius dolor est, quis viverra urna ultricies in. Donec et vehicula risus.
          Quisque sollicitudin justo a augue porta, sit amet condimentum lectus convallis. Pellentesque mollis, turpis sit amet rutrum tempor, mauris ante vehicula velit, quis eleifend velit est a sem. Donec sit amet tincidunt risus. Mauris sapien ante, efficitur nec consectetur eget, mollis quis odio. Mauris id tortor eget ante pharetra ultricies et a nulla. Donec fringilla urna ac tortor vulputate sodales. Curabitur ac mollis massa. Phasellus convallis elit vitae lacinia suscipit. Morbi viverra, orci in porttitor tincidunt, augue erat suscipit ipsum, sit amet facilisis odio mi eget dui. Pellentesque commodo, elit nec elementum mattis, massa orci viverra leo, sit amet facilisis metus erat ut nisi. Sed hendrerit orci sed aliquet cursus. Nulla non euismod lacus, eu sagittis nulla. 
          </span>

          <div className='flex flex-col'>
            <span>ID oferty: 777</span>
            <span>Wyświetleń oferty: 1337</span>
          </div>
        </div>
    </section>
  )
}

export default PostDetails