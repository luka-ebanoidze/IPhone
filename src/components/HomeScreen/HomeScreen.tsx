import { useNavigate } from "react-router-dom";

export function HomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="h-full pt-5 pb-3 flex flex-col justify-between items-center gap-5">
      <header className="w-full flex justify-center gap-5">
        <div className="w-[130px] h-[130px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[130px] h-[130px] bg-blue-300 rounded-2xl"></div>
      </header>
      <section className="flex flex-wrap gap-3 justify-center">
        <div
          onClick={()=>{navigate("/app/calculator")}}
          className="w-[60px] h-[60px] bg-blue-300 rounded-2xl overflow-hidden object-cover"
        >
          <img
            src="https://i.pinimg.com/originals/43/28/c3/4328c30611e0c3a5556fa1d4cb35dae7.png"
            alt="calculator"
          />
        </div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
      </section>
      <footer className="w-[92.5%] h-[90px] bg-purple-300 rounded-[30px] flex justify-center gap-3 items-center">
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
        <div className="w-[60px] h-[60px] bg-blue-300 rounded-2xl"></div>
      </footer>
    </div>
  );
}
