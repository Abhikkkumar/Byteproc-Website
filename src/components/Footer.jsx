import { Link } from "react-router-dom";
import logo from "../assets/blue-logo.png";
export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between px-[3%]  py-[4%] bg-[#1e294b] text-[var(--col1)] ">
      <div className="lg:w-[24%] mb-[2%] sm:w-[35%] w-full">
        <img className="w-[180px] sm:w-3/4 mb-[1%]" src={logo} alt="" />
        <p className="max-w-[300px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          quasi accusamus et accusantium corporis explicabo?
        </p>
        <div className="w-fit pt-[1.75%]">
          <a href="#" target="_blank" className="mr-[.75rem] text-[1.4rem]">
            <i className="fa-brands fa-facebook "></i>
          </a>
          <a href="#" target="_blank" className="pr-[.3rem] text-[1.4rem]">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="lg:w-[24%] mb-[2%] sm:w-[35%] w-full flex flex-col">
        <h2 className="uppercase mb-[1%] text-[1.4rem] font-[500]">
          Our Services
        </h2>
        <Link to="/" className="uppercase w-fit hover:text-[var(--col2)]">
          <i className="fa-solid fa-angle-right"></i> Home
        </Link>
        <Link to="/" className="uppercase w-fit hover:text-[var(--col2)]">
          <i className="fa-solid fa-angle-right"></i> About Us
        </Link>
        <Link to="/" className="uppercase w-fit hover:text-[var(--col2)]">
          <i className="fa-solid fa-angle-right"></i> Support & Services
        </Link>
        <Link to="/" className="uppercase w-fit hover:text-[var(--col2)]">
          <i className="fa-solid fa-angle-right"></i> Products
        </Link>
        <Link to="/" className="uppercase w-fit hover:text-[var(--col2)]">
          <i className="fa-solid fa-angle-right"></i> Contact us
        </Link>
      </div>
      <div className="lg:w-[24%] mb-[2%] sm:w-[35%] w-full flex flex-col">
        <h2 className="uppercase mb-[1%] text-[1.4rem] font-[500]">CONTACT</h2>
        <p className="flex items-start">
          <i className="fa-solid fa-location-dot mt-[7px]"></i>
          <p className="max-w-[200px] ml-[8px] ">
            Raja Bazar, Motihari Bihar, 845401, IN
          </p>
        </p>
        <p>
          <i class="fa-solid fa-tty"></i>{" "}
          <a href="tel:+91-7368804237">+91-7368804237</a>
        </p>
        <p>
          <i class="fa-regular fa-envelope"></i>{" "}
          <a href="mailto:info@easywebes.com">info@easywebes.com</a>
        </p>
      </div>
      <div className="lg:w-[24%] mb-[2%] sm:w-[35%] w-full flex flex-col">
        <h2 className="uppercase mb-[1%] text-[1.4rem] font-[500]">
          Our Location
        </h2>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119631.16820783437!2d72.78092501778825!3d20.445715705246023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0db12a625575b%3A0xf25ca5d34a352572!2sVama%20Skylight%20LLP.!5e0!3m2!1sen!2sin!4v1707742323867!5m2!1sen!2sin"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0px" }}
        ></iframe>
      </div>
    </div>
  );
}
