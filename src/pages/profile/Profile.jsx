import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  let navigate = useNavigate();
  let [user, setprofile] = useState([]);
  
  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get(
          "https://tourist-project-backend.onrender.com/user/profile",
          {
            withCredentials: true,
          },
        );
        setprofile(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);

  // back button navigate
  return (
    <div>
      <button
        onClick={() => navigate("/bookings")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2"
      >
        ← back
      </button>
      
      {user ? (
        <div className=" md:flex md:justify-center md:h-125 ">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-blue-50 p-6 shadow-lg h-200 md:border-black md:h-110 md:max-w-130">
            {/* Header */}
            <div className="mb-6 text-center md:h-30">
              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 ">
                {user.userName?.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.userName}
              </h2>
              <p className="text-base text-gray-500">User Profile</p>
            </div>

            {/* Info */}
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-gray-500">📧 Email</span>
                <span className="font-semibold text-gray-800">
                  {user.userEmail}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">📞 Phone</span>
                <span className="font-semibold text-gray-800">
                  {user.userPhone}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div role="status" className="h-200 ">
          <button
            type="button"
            className="h-140  flex justify-center items-center w-full h-140 text-body bg-neutral-primary-soft  border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-neutral-tertiary animate-spin fill-brand me-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
}
