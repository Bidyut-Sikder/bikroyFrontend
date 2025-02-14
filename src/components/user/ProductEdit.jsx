import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import UserProducts from "./UserProducts";
import CreateProducts from "../products/CreateProducts";
import Setting from "./Setting";
import UserStore from "../../store/userStore";
import UpdateProduct from "../products/UpdateProduct";
import { useNavigate } from "react-router-dom";
import productStore from "../../store/productStore";

const ProductEdit = () => {
  const navigate = useNavigate();
  const {
    ProductCreateRequest,
    ProductCategoryList,
    ProductCategoryListRequest,
  } = productStore();

  const { profileDetailsRequest, profileDetails, userLogoutRequest } =
    UserStore();
  const [show, setShow] = useState({
    profile: false,
    ads: false,
    update: true,
    setting: false,
  });

  const onClickHandler = (data) => {
    if (data === "profile") {
      setShow({ profile: true });
      navigate("/user");
    }
    if (data === "ads") {
      setShow({ ads: true });
      navigate("/user");
    }
    if (data === "create") {
      setShow({ create: true });
    }
    if (data === "setting") {
      setShow({ setting: true });
      navigate("/user");
    }
  };

  useEffect(() => {
    (async () => {
      await profileDetailsRequest();
      await ProductCategoryListRequest();
    })();
  }, []);

  return (
    <div className="">
      <div className="myProfile block py-12 min-h-screen bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="bg-[#fff]  block p-4 md:p-8 rounded-lg">
            <div className="react-tabs" data-rttabs="true">
              <div className="md:flex gap-10">
                <div className="navOption md:w-2/12 mb-10 md:mb-0">
                  <h2 className="text-slate-700 text-xl font-bold">
                    My Profile
                  </h2>
                  <ul className="mt-8" role="tablist">
                    <li
                      onClick={() => onClickHandler("profile")}
                      className="react-tabs__tab react-tabs__tab--selected"
                      role="tab"
                      id="tab:r0:0"
                      aria-selected="true"
                      aria-disabled="false"
                      aria-controls="panel:r0:0"
                      tabIndex="0"
                      data-rttab="true"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="inline-block mb-1 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
                      </svg>
                      Profile Info
                    </li>
                    <li
                      onClick={() => onClickHandler("ads")}
                      className="react-tabs__tab"
                      role="tab"
                      id="tab:r0:1"
                      aria-selected="false"
                      aria-disabled="false"
                      aria-controls="panel:r0:1"
                      data-rttab="true"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="inline-block mb-1 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                      </svg>
                      Your Ads
                    </li>
                    <li
                      onClick={() => onClickHandler("update")}
                      className="react-tabs__tab"
                      role="tab"
                      id="tab:r0:2"
                      aria-selected="false"
                      aria-disabled="false"
                      aria-controls="panel:r0:2"
                      data-rttab="true"
                    >
                      {" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="inline-block mb-1 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"></path>
                        <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"></path>
                      </svg>
                      Edit Ads
                    </li>
                    <li
                      onClick={() => onClickHandler("setting")}
                      className="react-tabs__tab"
                      role="tab"
                      id="tab:r0:3"
                      aria-selected="false"
                      aria-disabled="false"
                      aria-controls="panel:r0:3"
                      data-rttab="true"
                    >
                      {" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="inline-block mb-1 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
                      </svg>
                      Setting
                    </li>
                  </ul>
                </div>

                <div className="profileBody md:w-10/12 mt-10 md:border-l md:pl-8">
                  {profileDetails ? (
                    <h2 className="text-slate-500 text-xl font-semibold border-b pb-4">
                      {profileDetails.firstName} {profileDetails.lastName}
                    </h2>
                  ) : (
                    ""
                  )}

                  {show.profile ? <ProfileInfo /> : ""}
                  {show.ads ? <UserProducts /> : ""}
                  {show.update ? <UpdateProduct /> : ""}
                  {show.setting ? <Setting /> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
