
import React from 'react';

type Props = {
    jobName: string;
    startTime: string;
    endTime: string;
    location: string;
    duration: string;
    jobColor: string;
};

const CalendarPreviewWidget: React.FC<Props> = ({jobName, startTime, endTime, location, duration, jobColor}) => {    
    return (
        <div className="pl-10 flex flex-col gap-y-2 content-center items-left justify-center justify-self-end row-span-2 w-[95%] h-[147px] bg-[#f8f8ff] rounded-[30px] border border-[#b6b9ec]">
            <div className="flex items-center gap-x-2">
                <div className={`w-3 h-3 ${jobColor} rounded-full`} />
                <div className="text-[#121212] text-xl font-bold font-['Bricolage Grotesque']">{jobName}</div>
            </div>
            
            <div className="flex gap-x-2">
                <div className="w-[85.12px] h-[29px] bg-white rounded-[5px] border border-[#b6b9ec]">
                <div className="text-center">{startTime}</div>
                </div>

                <div> → </div>

                <div className="w-[85.12px] h-[29px] bg-white rounded-[5px] border border-[#b6b9ec]">
                <div className="text-center">{endTime}</div>
                </div>
            </div>

            <div className="flex gap-1.5">
                <div data-svg-wrapper className="relative">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52405 6.96372C7.12254 6.96372 6.73747 6.80422 6.45356 6.52031C6.16966 6.2364 6.01016 5.85134 6.01016 5.44983C6.01016 5.04832 6.16966 4.66326 6.45356 4.37935C6.73747 4.09544 7.12254 3.93594 7.52405 3.93594C7.92555 3.93594 8.31062 4.09544 8.59453 4.37935C8.87844 4.66326 9.03794 5.04832 9.03794 5.44983C9.03794 5.64863 8.99878 5.84549 8.9227 6.02917C8.84662 6.21284 8.73511 6.37973 8.59453 6.52031C8.45395 6.66089 8.28706 6.7724 8.10339 6.84848C7.91971 6.92456 7.72285 6.96372 7.52405 6.96372ZM7.52405 1.21094C6.39982 1.21094 5.32164 1.65753 4.5267 2.45248C3.73175 3.24743 3.28516 4.3256 3.28516 5.44983C3.28516 8.62899 7.52405 13.3221 7.52405 13.3221C7.52405 13.3221 11.7629 8.62899 11.7629 5.44983C11.7629 4.3256 11.3163 3.24743 10.5214 2.45248C9.72645 1.65753 8.64827 1.21094 7.52405 1.21094Z" fill="#8A8A8A"/>
                </svg>
                </div>

                <div className="text-[#8a8a8a] text-xs font-normal font-['Bricolage Grotesque']">{location}  |</div>

                <div data-svg-wrapper>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.11626 0.80957C8.98296 0.80957 11.3067 3.13335 11.3067 6.00005C11.3067 8.86675 8.98296 11.1905 6.11626 11.1905C3.24956 11.1905 0.925781 8.86675 0.925781 6.00005C0.925781 3.13335 3.24956 0.80957 6.11626 0.80957ZM6.11626 2.88576C5.9786 2.88576 5.84658 2.94045 5.74923 3.03779C5.65189 3.13513 5.59721 3.26715 5.59721 3.40481V6.00005C5.59724 6.13769 5.65194 6.26969 5.74929 6.36701L7.30643 7.92416C7.40433 8.0187 7.53544 8.07102 7.67153 8.06984C7.80762 8.06866 7.93781 8.01407 8.03404 7.91783C8.13028 7.8216 8.18487 7.69141 8.18605 7.55532C8.18723 7.41923 8.13491 7.28812 8.04037 7.19022L6.6353 5.78516V3.40481C6.6353 3.26715 6.58062 3.13513 6.48328 3.03779C6.38594 2.94045 6.25392 2.88576 6.11626 2.88576Z" fill="#8A8A8A"/>
                </svg>
                </div>

                <div className="text-[#8a8a8a] text-xs font-normal font-['Bricolage Grotesque']">{duration}</div>
            </div>
        </div>
    )
};

export default CalendarPreviewWidget;