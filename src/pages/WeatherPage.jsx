import { useCallback, useEffect, useState, useTransition } from "react";

export default function WeatherPage() {
  let [value, setValue] = useState("");
  let [apiValue, setapiValue] = useState([]);
  let [apiTemp, setapiTemp] = useState(null);
  let [img, setImg] = useState("");
  let [trans, settrans] = useTransition();
  let [dark, setDark] = useState(false);
  console.log(dark);

  useEffect(() => {
    let checkWhether = async () => {
      let city = "delhi";
      let apiKey = "1896aafdc48e12dbe4605d3d37947413";
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      try {
        let res = await fetch(api);
        if (!res.ok) {
          throw new error("ntwork not responding");
        }
        let jsonRes = await res.json();
        setapiValue(jsonRes.name);
        setapiTemp(jsonRes.main.temp);
        let imgIcon = jsonRes.weather[0].icon;
        let img2 = `https://openweathermap.org/img/wn/${imgIcon}@4x.png
`;
        setImg(img2);
      } catch (error) {
        console.log("eroor handiling", error);
      }
    };
    checkWhether();
  }, []);

  let inc = useEffect(() => {
    let checkWhether = async () => {
      let city = value;
      let apiKey = "1896aafdc48e12dbe4605d3d37947413";
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      try {
        let res = await fetch(api);
        if (!res.ok) {
          throw new error("ntwork not responding");
        }
        let jsonRes = await res.json();
        setapiValue(jsonRes.name);
        setapiTemp(jsonRes.main.temp);
        let imgIcon = jsonRes.weather[0].icon;
        console.log(imgIcon);
        let img2 = `https://openweathermap.org/img/wn/${imgIcon}@4x.png
`;
        setImg(img2);
      } catch (error) {
        console.log("eroor handiling", error);
      }
    };
    checkWhether();
  }, [value]);

  return (
    <>
      {dark ? (
        <div className="bg-black h-[80vh] pt-10 pl-10 reletive flex justify-center w-[100%]">
          <div className="rounded w-100 h-[70%] flex flex-col bg-gray-300 shadow-2xl bg-gradient-to-r from-red-300 via-green-500 to-blue-500">
            <h1 className="text-2xl underline text-center pt-5">Enter City</h1>
            <br />

            <input
              type="text"
              placeholder="Enter City..."
              className="border rounded h-[44px] pl-3 m-2 font-bold"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <div className="flex justify-center">
              {/* <button
                disabled={trans}
                onClick={inc}
                className="border rounded bg-black text-white w-30  h-10 hover:scale-[1.1] hover:transition duration-300 hover:bg-orange-300 active:bg-gray-300 hover:text-black"
              >
                Search Whether
              </button> */}
            </div>
            <h2 className="text-lg font-bold  text-center mt-2">{apiValue}</h2>
            <h3 className="underline text-center mt-3 text-blue-500">
              {" "}
              Temp {Math.round(apiTemp)} c%
            </h3>
            <div className="w-100  flex justify-center ">
              <img className="w-35" src={img} alt="weather temp" />
            </div>
          </div>
          <p
            onClick={() => setDark(!dark)}
            className="flex items-center h-12 justify-center absolute top-3 right-20 bg-white text-black active:text-blue-500 rounded w-10"
          >
            <i class=" border rounded fa-solid fa-moon w-10 text-center h-8 text-3xl "></i>
          </p>
        </div>
      ) : (
        <div className="bg-white h-[80vh] pt-10 pl-10 flex justify-center w-[100%] ">
          <div className="rounded w-100 h-[70%] flex flex-col bg-gray-300 shadow-2xl bg-gradient-to-r from-red-300 via-green-500 to-blue-500">
            <h1 className="text-2xl underline text-center pt-5">Enter City</h1>
            <br />

            <input
              type="text"
              placeholder="Enter City..."
              className="border rounded h-[44px] pl-3 m-2 font-bold"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <div className="flex justify-center">
              {/* <button
                disabled={trans}
                onClick={inc}
                className="border rounded bg-black text-white w-30  h-10 hover:scale-[1.1] hover:transition duration-300 hover:bg-orange-300 active:bg-gray-300 hover:text-black"
              >
                Search Whether
              </button> */}
            </div>
            <h2 className="text-lg font-bold  text-center mt-2">{apiValue}</h2>
            <h3 className="underline text-center mt-3 text-blue-500">
              {" "}
              Temp {Math.round(apiTemp)} c%
            </h3>
            <div className="w-100  flex justify-center ">
              <img className="w-35" src={img} alt="weather temp" />
            </div>
          </div>
          <p
            onClick={() => setDark(!dark)}
            className=" flex items-center h-12 justify-center absolute top-3 right-20 w-10 "
          >
            <i class="border rounded fa-solid fa-moon w-10 text-center h-8 text-3xl text-green-300 hover:bg-yellow-300 hover:text-black  "></i>
          </p>
        </div>
      )}
    </>
  );
}
