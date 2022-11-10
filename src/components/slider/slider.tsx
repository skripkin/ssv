import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import 'swiper/css/navigation';
import Arrow2 from '../icons/arrow2/arrow2';
import Review from '../review';
import React from 'react';

const Slider = () => {
  const navPrevRef = React.useRef(null);
  const navNextRef = React.useRef(null);
  const ref = React.useRef<any>(null);

  const goNext = () => {
    ref.current.slideNext();
  };

  const goPrev = () => {
    ref.current.slidePrev();
  };

  return (
    <div>
      <Swiper
        onInit={(swiper) => (ref.current = swiper)}
        slideNextClass="awert"
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div style={{ margin: 10 }}>
            <Review
              onClick={(element: any) => console.log(element)}
              title="Венера"
              subTitle="Спасибо большое за возможность, которую Вы
                    даете мне и другим студентам на занятии. Язык
                    – для того, чтобы говорить и понимать. С Вами
                    я не чувствую неловкости, когда совершаю 
                    ошибки. Я действительно почувствовала, что
                    могу улучшить свой английский. Я очень
                    надеюсь на то, что в скором будущем 
                    беспокойство по поводу моего «я не понимаю» 
                    или «я боюсь сказать» исчезнет."
              dataTime="08 september"
              image="./image9.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ margin: 10 }}>
            <Review
              onClick={(element: any) => console.log(element)}
              title="Венера"
              subTitle="Hello"
              dataTime="08 september"
              image="./image9.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ margin: 10 }}>
            <Review
              onClick={(element: any) => console.log(element)}
              title="Венера"
              subTitle="Hi"
              dataTime="08 september"
              image="./image9.png"
            />
          </div>
        </SwiperSlide>
        <button className="slidePrev" ref={navPrevRef} onClick={() => goPrev()}>
          <Arrow2 />
        </button>
        <button className="slideNext" ref={navNextRef} onClick={() => goNext()}>
          <Arrow2 />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
