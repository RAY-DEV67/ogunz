import ReactPlayer from "react-player";
import Liya1 from "../assets/aboutliya1.jpg";
import Liya2 from "../assets/aboutliya2.jpg";
import liyags from "../assets/liyags.mp4";
import { Theme } from "../App";
import { useContext } from "react";
import { Footer } from "../components/footer";

export function About() {
  const theme = useContext(Theme);

  return (
    <div className="bg-[#C2CEDA] text-[#000009]">
      <div className="aboutlanding h-[70vh] flex flex-col items-start justify-end">
        <h1 className="text-[#ffffff] font-semibold text-[3rem] ml-[1rem] mb-[1rem]">
          About Us
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-[2rem] w-[90vw] max-w-[1000px]">
          <h1 className="text-[3rem] font-bold">Welcome to Ogunz Shot It!</h1>

          <p className="text-[1.5rem] lg:text-[2rem]">
            Capturing moments, preserving memories, and telling stories through
            the lens—that's what we live for. We are a team of passionate
            photographers dedicated to creating timeless and extraordinary
            images that evoke emotions and leave a lasting impression.
          </p>

          <p className="text-[1.5rem] my-[1rem] lg:text-[2rem]">
            With years of experience in the field, we specialize in various
            genres of photography, including portrait, wedding, nature, travel,
            and commercial photography. Our goal is to provide you with
            exceptional imagery that reflects your unique personality, style,
            and vision.
          </p>

          <p className="text-[1.5rem] lg:text-[2rem]">
            What sets us apart is our unwavering commitment to delivering the
            highest quality photographs. We strive for perfection in every
            frame, paying meticulous attention to detail, composition, and
            lighting. Our expertise in utilizing state-of-the-art equipment and
            editing techniques ensures that every image we produce is a work of
            art.
          </p>

          <p className="text-[1.5rem] my-[1rem] lg:text-[2rem]">
            At Ogunz Shot It, we believe that the best photographs are the ones
            that capture genuine moments, real emotions, and candid expressions.
            We aim to create a comfortable and relaxed environment during our
            sessions, allowing your true essence to shine through. Whether it's
            a family portrait, a wedding celebration, or a corporate event, we
            strive to make your experience enjoyable and stress-free.
          </p>

          <p className="text-[1.5rem] lg:text-[2rem]">
            We value collaboration and open communication with our clients. We
            believe that understanding your expectations, needs, and desires is
            essential in delivering photographs that exceed your wildest
            imagination. We work closely with you to plan every aspect of the
            shoot, from selecting the perfect location to choosing the ideal
            wardrobe and props. Our goal is to make your vision a reality.
          </p>

          <p className="text-[1.5rem] my-[1rem] lg:text-[2rem]">
            We are proud to have had the opportunity to work with a diverse
            range of clients, from individuals and families to businesses and
            organizations. Our photographs have been featured in numerous
            publications and have garnered praise for their artistic quality and
            storytelling ability.
          </p>

          <p className="text-[1.5rem] lg:text-[2rem]">
            Thank you for visiting our website. Take a moment to explore our
            portfolio and see the world through our lens. If you have any
            questions or would like to discuss your photography needs, please
            don't hesitate to get in touch. We would be honoured to be a part of
            your special moments and help you create memories that will last a
            lifetime.
          </p>

          <p className="text-[1.5rem] my-[1rem] lg:text-[2rem]">
            Ogunz Shot It – your memories… our art.
          </p>
        </div>
      </div>

     
      <Footer />
    </div>
  );
}
