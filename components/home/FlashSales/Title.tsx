import { useEffect, useState } from "react";
// Date() ref : https://www.w3schools.com/howto/howto_js_countdown.asp
export default function Title(): JSX.Element {
  const [isHour, setHour] = useState(0);
  const [isMinute, setMinute] = useState(0);
  const [isSecond, setSecond] = useState(0);
  useEffect(() => {
    const date: Date = new Date();
    const countDownDate: number = new Date(
      `${date.getMonth() + 1} ${date.getDate() + 1
      }, ${date.getFullYear()} 00:00:00`
    ).getTime();
    let x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now  and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);
  return (
    <>
      <div className="xl:flex xl:space-x-2 mb-0 z-0">
        <div className="flex">
          <p className="xl:text-5xl text-2xl font-bold italic text-red-500">
            FLASH
          </p>
          <p className="xl:text-5xl text-2xl font-bold italic text-yellow-500">
            SALES
          </p>
        </div>
        <div className="flex items-center xl:space-x-2 space-x-1">
          <svg className="xl:h-10 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"
            ></path>
          </svg>
          <p className="xl:text-xl text-md font-bold text-slate-700">
            เหลือเวลาเพียง
          </p>
          <div className="flex items-center space-x-1">
            <div className="bg-slate-500 text-xl p-1 rounded-lg">
              <p className="xl:text-xl text-sm text-white font-semibold">
                {`${isHour}`.length === 1 ? `0${isHour}` : isHour}
              </p>
            </div>
            <p className="font-bold">:</p>
            <div className=" bg-slate-500 text-xl p-1 rounded-lg">
              <p className="xl:text-xl text-sm text-white font-semibold">
                {`${isMinute}`.length === 1 ? `0${isMinute}` : isMinute}
              </p>
            </div>
            <p className="font-bold">:</p>
            <div className=" bg-slate-500 text-xl p-1 rounded-lg">
              <p className="xl:text-xl text-sm text-white font-semibold">
                {`${isSecond}`.length === 1 ? `0${isSecond}` : isSecond}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
