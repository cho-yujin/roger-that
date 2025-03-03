
import React from 'react';

type Props = {
    jobName: string;
    position: string;
    employmentStatus: string;
    bgColor: string;
    borderColor: string;
};

const JobWidget: React.FC<Props> = ({jobName, position, employmentStatus, bgColor, borderColor}) => {    
    return (
        
        <div className={`pl-10 flex flex-col gap-y-0.5 content-center items-left justify-center justify-self-center row-span-2 w-[99%] h-[164px] rounded-[30px] ${bgColor} ${borderColor}`}>
            <div className="text-black text-2xl font-bold font-['Bricolage Grotesque']">{jobName}</div>
            
            <div className="text-[#8a8a8a] pb-3 text-base font-normal font-['Bricolage Grotesque']">{position} • {employmentStatus}</div>

            <div className="justify-self-end pr-5 w-[197px] h-[41px] bg-white rounded-[25px] content-center">
            <div className="text-nowrap pl-6 w-36 h-[18.45px] text-black text-[15px] font-normal font-['Bricolage Grotesque']">Go to Job Calendar →</div>
            </div>
        </div>
    )
};

export default JobWidget;