import "../App.css";

const Toggle = () => {
  return (
    <div>
      <div className="">
        <div className="relative w-12 duration-700">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
