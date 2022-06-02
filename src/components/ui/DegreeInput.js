const DegreeInput = (props) => {
  return (
    <div>
      <div className="outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-300 dark:border-gray-600 bg-gray-100 focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-300 mb-5">
        <label class="inline-block text-sm text-gray-600" for="color">
          Degree
        </label>
        <div class="relative flex w-full">
          <select class="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded appearance-none cursor-pointer focus:outline-none hover:border-gray-400 leading-tight">
            <option>Select...</option>
            <option value="BTech">BTech</option>
            <option value="Mtech">Mtech</option>
            <option value="PHD">PHD</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
            <svg
              class="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeInput;
