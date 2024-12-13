const Burger = ({ openMenu }) => {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className="mix-blend-difference"
    >
      <div className="burger fixed m-2 mr-4 cursor-pointer  right-0 top-4 z-[2] flex flex-col gap-2 p-4 pointer-events-none group">
        <div className="before:content-[''] before:block before:w-8 before:h-[3px] before:bg-white  before:mix-blend-difference "></div>
        <div className="after:content-[''] after:block after:w-8 after:h-[3px] after:bg-white  after:mix-blend-difference "></div>
        <div className="bounds absolute left-0 top-0 w-full h-full pointer-events-auto "></div>
      </div>
    </div>
  );
};

export default Burger;
