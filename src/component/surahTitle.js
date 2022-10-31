import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../component/spinner";
import Footer from "../component/footer";

const Titles = () => {
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [ada, setAda] = useState(false);

  const getSurah = () => {
    axios
      .get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
      .then((data) => {
        setTitles(data.data);
      })
      .catch(setError("Allahuakbar Error Bang!"));
  };

  useEffect(() => {
    getSurah();
  }, []);



  if (titles.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container mx-auto  pb-6 rounded-md ">
        <div className="p-20  pt-6 pb-16">
          <p className="font-extrabold lg:text-6xl min-[220px]:text-2xl  font-romo sm:text-2xl text-center m-8  text-transparent  bg-clip-text bg-gradient-to-r from-gray-300 to-sky-400">
            Holy Qur'an
          </p>

          {/* //search input */}

          <div className="relative drop-shadow-md ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(event) => {
                setAda(true);
                setSearch(event.target.value);
              }}
              type="search"
              className="block p-4 pl-10 w-full text-sm  text-gray-900  rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 font-romo dark:focus:border-blue-500"
              placeholder="Mau surah apa..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
          {titles
            .filter((val) => {
              if (val == "") {
                return val;
              } else if (
                val.nama
                  .replace(/[^\w]/g, "")
                  .toLowerCase()
                  .includes(search.replace(/[^\w]/g, "").toLowerCase())
              ) {
                return val;
              }
            })
            .map((surah, index) => {
              return (
                <div className="flex justify-center" key={index}>
                  <Link
                    to={`/surah/${surah.nomor}`}
                    key={index}
                    className="relative text-center min-[220px]:p-2 min-[220px]:m-2 min-[220px]:w-72  sm:p-4 
                     sm:m-2 lg:p-6 lg:m-2 font-romo hover:duration-700 
                     bg-gray-700 hover:border-cyan-400
                     outline-cyan-600 text-white  hover:bg-black border-2  rounded-md"
                  >
                    <p className="text-lg" key={index}>
                      {surah.nama}
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      <div>{!ada && <Footer />}</div>
    </div>
  );
};

export default Titles;
