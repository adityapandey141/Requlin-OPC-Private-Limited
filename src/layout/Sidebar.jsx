import React from "react";

export default function Sidebar() {
  return (
    <div
      id="mobile-menu"
      className={`${
        sidebar ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 w-64 h-full bg-dg text-white z-40 transform  transition duration-300 ease-in-out md:hidden`}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-4 mb-8 text-center">
          <img src={footerlogo} alt="Logo" className=" w-40 mb-2" />
        </div>
        <div className="mt-5 border-t-1 pt-5"></div>
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) =>
            item.url.startsWith("/#") ? (
              <a key={index} href={item.url} onClick={toggleSidebar}>
                {item.name}
              </a>
            ) : (
              <Link key={index} to={item.url} onClick={toggleSidebar}>
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="mt-5 border-t-1 pt-5">
          <h1 className="text-3xl font-bold text-yel">Address</h1>
          <p className="mt-3">
            138, Ajit Nagar Society, Nr. Urmi Society, Dinesh Mill Road,
            Vadodara-390020.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="tel:+919824253196"
            className="block bg-[#6383aa] hover:bg-blue-600 text-white text-center font-medium px-4 py-2 rounded"
          >
            +91 9824253196
          </a>
        </div>
      </div>
    </div>
  );
}
