import {
  StyledCarouselWrapper,
  StyledCarouselHeader,
  StyledCarouselHeading,
  StyledCarouselActions,
  StyledCarouselAction,
  StyledCarousel,
} from './blogsCarousel.styles';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PostsListItem from '@/posts/PostsListItem';
import { BlogTypes } from 'src/types/blogs';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

const BlogsCarousel = () => {
  const [isAvailableLeft, setIsAvailableLeft] = useState<boolean>(false);
  const [isAvailableRight, setIsAvailableRight] = useState<boolean>(true);
  const similarBlogs: BlogTypes[] = [];
  const slider = useRef<Slider>(null);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current: number) => {
      if (current === similarBlogs.length - 3) {
        setIsAvailableRight(false);
      } else {
        setIsAvailableRight(true);
      }
      if (current === 0) {
        setIsAvailableLeft(false);
      } else {
        setIsAvailableLeft(true);
      }
    },
  };

  return (
    <StyledCarouselWrapper>
      <StyledCarouselHeader>
        <StyledCarouselHeading>მსგავსი სტატიები</StyledCarouselHeading>
        {similarBlogs.length > 3 && (
          <StyledCarouselActions>
            <StyledCarouselAction
              available={isAvailableLeft}
              onClick={() => slider?.current?.slickPrev()}
            >
              <FaChevronLeft
                style={{
                  color: 'var(--clr-white)',
                }}
              />
            </StyledCarouselAction>
            <StyledCarouselAction
              available={isAvailableRight}
              onClick={() => slider?.current?.slickNext()}
            >
              <FaChevronRight
                style={{
                  color: 'var(--clr-white)',
                }}
              />
            </StyledCarouselAction>
          </StyledCarouselActions>
        )}
      </StyledCarouselHeader>
      {similarBlogs.length > 0 ? (
        <StyledCarousel {...settings} ref={slider}>
          {similarBlogs.map((blog) => {
            return <PostsListItem key={blog.id} blog={blog} />;
          })}
        </StyledCarousel>
      ) : (
        <p>მსგავსი სტატიები არ მოიძებნა</p>
      )}
    </StyledCarouselWrapper>
  );
};
export default BlogsCarousel;
