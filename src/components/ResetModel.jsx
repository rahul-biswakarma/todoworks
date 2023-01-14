import React from "react";

const ResetModel = () => {
  function clearAll() {
    localStorage.clear();
    window.location.reload();
  }
  function hideResetModel() {
    document.getElementById("reset-model").style.top = "-200%";
  }
  return (
    <section
      id="reset-model"
      className="absolute top-[-200%] left-[0px] w-[100vw] h-[100vh] flex justify-center items-center bg-black/40 backdrop-blur-sm z-50 transition-all"
    >
      <div className="relative p-[3rem] bg-bg dark:bg-dark-bg-2 w-max h-max flex flex-col gap-[2rem] px-[5rem]">
        <h1 className="font-[500] text-[2rem] text-text-1 dark:text-dark-text-1 pb-[1rem]">
          Warning: Delete all tasks?
        </h1>
        <button
          onClick={clearAll}
          className="w-full bg-rose-400 py-[1rem] cursor-pointer border-2 border-rose-400 hover:border-rose-600"
        >
          Yes, Delete
        </button>
        <svg
          onClick={hideResetModel}
          className="absolute top-[10px] right-[10px] rotate-45 w-[25px] h-auto stroke-icons-color-2 dark:stroke-dark-icon-color-1 hover:stroke-rose-600 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M12 5v14m-7-7h14" />
        </svg>
      </div>
    </section>
  );
};

export default ResetModel;
