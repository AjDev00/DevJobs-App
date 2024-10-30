import sunImg from "../assets/desktop/icon-sun.svg";
import moonImg from "../assets/desktop/icon-moon.svg";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <div>
      <div className="bg-mobileHeaderBgImage h-32">
        <div className="flex flex-row justify-between items-center px-4 py-4">
          <div className="text-white text-3xl font-semibold">devjobs</div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div>
              <img src={sunImg} alt="" />
            </div>
            <Toggle />
            <div>
              <img src={moonImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
