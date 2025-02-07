import Group from '/images/Group.jpeg'

export default function Hero() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row   pb-12 max-w-[2000px] m-auto">
            <div className="w-full md:w-2/6 px-2">
                <div className="w-full md:w-4/5 m-auto">
                    <h1 className="text-sky-900 pt-2 md:pt-10 lg:pt-28 text-3xl lg:text-5xl font-medium text-center md:text-left">
                        ALS Computing
                    </h1>
                    <p className=" border-l-sky-500 mt-2 md:mt-8 lg:mt-16 md:border-l-2 md:pl-4 text-lg lg:text-2xl">
                        Supporting ALS and the scientific community with software development, infrastructure management, and more.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-4/6">
                <img src={Group} className="md:rounded-br-[5rem] lg:rounded-br-[10rem]" alt="full team in front of ALS"/>
                <p className="text-sm hidden md:block py-4">The ALS Computing team in front of building 6. </p>
            </div>
        </section>
    )
}