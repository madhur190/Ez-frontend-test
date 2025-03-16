interface cardProps{
    image:string,
    title:string
}

export default function Card({image,title}:cardProps){
    return <div className="bg-[#112949] flex flex-col h-60 2xl:h-63 max-w-64 rounded-xl p-7 text-6 xl:text-sm 2xl:text-lg leading-7 xl:leading-6 2xl:leading-7 min-w-0">
        <div className="text-[#3CC3F2] pb-5 flex items-center">
            <div className="pr-5">
                <img src={image} className="w-12 h-12 object-contain"></img>
            </div>
            <div className="min-w-0">
                {title}
            </div>
        </div>
        <div className="text-white pb-7 flex-1">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </div>
    </div>
}