const CircularButton = () => {
    return (
      <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up inline-block mr-1"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down inline-block ml-1"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    );
  };
  
  export default CircularButton;