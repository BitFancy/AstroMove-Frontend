'use client'
import LiveCard from "../../components/livecard";
import Button1 from "../../components/button1";
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})


const CardInfo = [
    { timeview: " ", livestate: " ", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
];

export default function featured() {
    return (
        <div className={`w-full m-auto mt-[215px] ${jost.className} `}>
            <h1 className='text-white text-[50px] font-bold mb-[35px]'>FEATURED PROJECTS</h1>
            <div className="w-full mt-[80px]">

                <div className="w-full flex flex-wrap gap-y-8 justify-around 3xl:h-[700px] overflow-hidden">
                    {CardInfo.map((item, index) => (
                        <div key={index}>
                            <LiveCard
                                timeview={item.timeview}
                                projectname={item.projectname}
                                description={item.description}
                                target={item.target}
                                token={item.token}
                                startday={item.startday}
                                endday={item.endday}
                                livestate={item.livestate}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full mt-[50px] flex items-center justify-center">
                    <Button1
                        name="View More"
                        width="140px"
                        height="40px"
                    />
                </div>
            </div>
        </div>
    );
};
