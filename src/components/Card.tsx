interface cardProps{
    image:string,
    title:string
}

export default function Card({image,title}:cardProps){
    return <div className="bg-[#112949] h-60 2xl:h-63 max-w-64 2xl:w-64 3xl:w-78 3xl:h-72 2xl:max-w-78 rounded-xl p-7 text-6 xl:text-sm 2xl:text-lg leading-[29px]">
        <div className="text-[#3CC3F2] pb-5 flex items-center">
            <div className="pr-5">
                <img src={image}></img>
            </div>
            <div>
                {title}
            </div>
        </div>
        <div className="text-white pb-7">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </div>
    </div>
}