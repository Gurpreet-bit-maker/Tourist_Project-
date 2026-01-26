import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  let navigate = useNavigate();

  let [user, setprofile] = useState([]);
  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get("https://tourist-project-backend.onrender.com/user/profile", {
          withCredentials: true,
        });

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
        ← 
      </button>

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-blue-50 p-6 shadow-lg h-200 ">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
            {user.userName?.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{user.userName}</h2>
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
  );
}
