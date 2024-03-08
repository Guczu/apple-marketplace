import Slider from "react-slick";

const PostImages = () => {

const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0",
};

  return (
      <Slider {...settings}>
        <div>
          <img 
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" 
            alt="product" 
            className='w-[500px] h-[500px] object-cover'
          />
        </div>
        <div>
          <img 
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" 
            alt="product" 
            className='w-[500px] h-[500px] object-cover'
          />
        </div>
        <div>
          <img 
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" 
            alt="product" 
            className='w-[500px] h-[500px] object-cover'
          />
        </div>
      </Slider>
  )
}

export default PostImages