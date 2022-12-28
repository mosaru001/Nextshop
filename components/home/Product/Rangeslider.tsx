import { useState, useEffect, useRef } from "react";

const Rangeslider = ({ initialMin, initialMax, min, max, step, priceCap }: any) : JSX.Element => {
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);

    const handleMin = (e: any) => {
        if (maxValue - minValue >= priceCap && max) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e: any) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.rigth = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue]);

    return (
        <>
            <div className="flex flex-col w-72 bg-white shadow px-3 py-3 border-t-2  text-black">
                <div className="my-5 mx-5">
                    <h1 className=" text font-bold text-gray-800 mb-1">ราคา</h1>
                </div>
                {/* slider */}
                <div className="mb-4 ">
                    <div className="slider relative h-1 rounded-md bg-green-300">
                        <div className="progress absolute h-1 bg-green-300 rounded" ref={progressRef}></div>
                    </div>

                    <div className="rang-input relative">
                        <input
                            onChange={handleMin}
                            type="range"
                            value={minValue}
                            min={min}
                            step={step}
                            max={max}
                            className="rang-min absolute w-full h-0 bg-transparent appearance-none pointer-events-none"
                        />
                    </div>
                    <div className="rang-input relative">
                        <input
                            onChange={handleMax}
                            type="range"
                            value={maxValue}
                            min={min}
                            step={step}
                            max={max}
                            className="rang-max absolute w-full h-0 bg-transparent appearance-none pointer-events-none"

                        />
                    </div>

                </div>

                <div className=" my-auto mx-auto">
                    <div className="rounded-md flex flex-row">
                        {/* <span className="p-2 font-semibold">Min</span> */}
                        <input
                            onChange={(e) => setMinValue(e.target.value)}
                            type="number"
                            value={minValue}
                            className="w-16 rounded-sm border border-gray-400 text-center"
                        />

                        <span className="mx-3 ml-3 font-semibold text-xl ">-</span>

                        {/* <span className="p-2 font-semibold ">Max</span> */}
                        <input
                            onChange={(e) => setMaxValue(e.target.value)}
                            type="number"
                            value={maxValue}
                            className="w-16 rounded-sm border border-gray-400 text-center"
                        />
                        <span className=""><button className="mx-3 ml-6 px-1 rounded-sm bg-green text-green border border-green-600"> &gt; </button></span>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Rangeslider