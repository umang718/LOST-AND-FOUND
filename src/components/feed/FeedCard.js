const FeedCard = () => {
    return (
        <div className = "max-w-md mx-auto border border-gray-100 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className = "md:flex">
                {/* <div className = "mb-3 w-32 h-32 rounded-full bg-cover bg-no-repeat bg-center shadow-lg" style = {{ backgroundImage: "url('')" }}></div> */}
                <div className = "p-8">
                    <div className = "uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Lorem Ipsum
                    </div>
                    <p className = "mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.Getting a new business off the ground is a lot of hard work.</p>
                </div>
                <div className = "md:shrink-0">
                    <div className = "text-xs text-gray-500 w-full text-right px-4 pt-2 pb-1">Lost on: 28 March, 2022</div>
                    <img className = "h-30 px-4 pb-4 pt-1 w-full object-cover md:w-40" src="./profile.jpg" alt="Man looking at item at a store" />
                </div>
            </div>
        </div>
    );
}

export default FeedCard;