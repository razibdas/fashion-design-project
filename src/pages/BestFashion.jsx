

const BestFashion = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-12 px-4 lg:px-12">
            {/* Left side with diff section */}
            <div className="w-full lg:w-1/2">
                <div className="diff aspect-[16/9]">
                    <div className="diff-item-1">
                        <img alt="daisy" src="https://i.ibb.co/kx5N8Xy/freestocks-3-Q3ts-J01nc-unsplash.jpg" />
                    </div>
                    <div className="diff-item-2">
                        <img alt="daisy" src="https://i.ibb.co/drfxzcS/13185405-5092428.jpg" />
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </div>

            {/* Right side with text content */}
            <div className="w-full lg:w-1/2 lg:pt-28 lg:mt-0">
                <h2 className="text-3xl lg:text-5xl">Best Fashion Since 2023</h2>
                <p className="text-lg lg:text-2xl mt-4">
                    Since 2023, fashion has evolved with innovative sustainability practices, bold color palettes,
                    and a fusion of vintage and futuristic styles. The industry showcases inclusivity and redefines
                    beauty standards, resulting in a dynamic and expressive global fashion landscape.
                </p>
            </div>
        </div>
    );
};

export default BestFashion;


