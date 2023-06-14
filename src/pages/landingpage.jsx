// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { Theme } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import testimony1 from "../assets/testimony1.jpg";
import testimony2 from "../assets/testimony2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import LoadingSpinner from "../components/spinner";
import { Footer } from "../components/footer";

export function LandingPage() {
  const theme = useContext(Theme);
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [welcome, setwelcome] = useState(false);

  const upload = async () => {
    setloading(true);
    await addDoc(collection(db, "Email"), {
      Email: email,
    });
    setloading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    upload();
    setwelcome(true);
    setTimeout(() => {
      setwelcome(false);
    }, 4000);
  };

  const colors = [testimony1, testimony2];
  const delay = 5000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="bg-[#C2CEDA] text-[#000009]">
      <div className="landing h-[100vh]"></div>
      <div className="flex flex-col items-center mt-[2rem]">
        <img
          className="w-[50vw] border-y border-[#000009] py-[2rem]"
          src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686661547/ogunz/332316903_1655333718317751_9136750553362641839_n_gsvabm.jpg"
        />
      </div>
      <div className="flex flex-col items-center mt-[1rem]">
        <div className="w-[90vw] text-center border-b border-[#000009] pb-[1rem]">
          <h2 className="text-[2.5rem] font-bold">Welcome to Ogunz Shot It!</h2>
          <p className="text-[1.5rem] lg:text-[2rem]">
            Capturing moments, preserving memories, and telling stories through
            the lens—that's what we live for. We are a team of passionate
            photographers dedicated to creating timeless and extraordinary
            images that evoke emotions and leave a lasting impression.
          </p>
          <p className="text-[1.5rem] mt-[0.5rem] lg:text-[2rem]">
            With years of experience in the field, we specialize in various
            genres of photography, including portrait, wedding, nature, travel,
            and commercial photography. Our goal is to provide you with
            exceptional imagery that reflects your unique personality, style,
            and vision.
          </p>
          <Link to="/About" className="flex flex-col items-center">
            <div className="border uppercase border-[#000009] text-[#000009] font-semibold text-2xl px-[2.5rem] m-[1rem] py-[0.3rem]">
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center" id="Music">
        <div className="container sm:w-[70%]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container mb-[-10rem] sm:mb-[0rem]"
          >
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686662624/ogunz/351168130_1011040613128318_1482769507321458964_n_x7ulny.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686662625/ogunz/342901743_767773171422864_6584300883533816234_n_mtqjip.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686662625/ogunz/350613525_784545236602067_7105872478449125369_n_hg3a10.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686662609/ogunz/322255488_1552200988526367_6369410239281455018_n_eahhzd.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686662609/ogunz/310942715_1159806294604706_1363115206006935307_n_tnzye8.jpg"
                className=""
              />
            </SwiperSlide>

            <div className="slider-controler mt-[-2rem] mb-[2rem] hidden sm:block">
              <div className="swiper-button-prev bg-[#D3D3D3] slider-arrow">
                <svg
                  viewBox="-3 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000009"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="icomoon-ignore"> </g>{" "}
                    <path
                      d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                  </g>
                </svg>
              </div>
              <div className="swiper-button-next bg-[#D3D3D3] slider-arrow">
                <svg
                  viewBox="-3 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000009"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="icomoon-ignore"> </g>{" "}
                    <path
                      d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                  </g>
                </svg>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
}





