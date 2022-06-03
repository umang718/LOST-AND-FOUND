const Email =(props) =>{
    return (
        <div>
            <div className="outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-300 dark:border-gray-600 bg-gray-100 focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-300 mb-5">
            <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" class="peer ... w-full h-9 rounded"/>
            <p class="mt-1 invisible peer-invalid:visible text-red-600 text-sm">
            Please provide a valid email address.
            </p>
        </label>
        </div>
        </div>
    );
        

    
};

export default Email;