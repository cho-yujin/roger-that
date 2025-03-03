
import CalendarPreviewWidget from "./calendarPreviewWidget";
import JobWidget from "./jobWidget";

export default function Dashboard(name: string) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-[40px] pb-11">Yoobin's Dashboard</h1>
        <div className="flex gap-x-3 items-center">
          <div className="flex w-[167px] h-10 bg-[#665cee] rounded-[25px] items-center justify-center">
            <div className="text-center text-white text-[15px] font-normal font-['Bricolage Grotesque']">Employee View</div>
          </div>

          <div className="flex w-[167px] h-10 gap-x-2 bg-white rounded-[25px] border border-[#b6b9ec] items-center justify-center">
            <div data-svg-wrapper className="relative">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 4.5V3.5C8.5 2.1 7.4 1 6 1C4.6 1 3.5 2.1 3.5 3.5V4.5C2.65 4.5 2 5.15 2 6V9.5C2 10.35 2.65 11 3.5 11H8.5C9.35 11 10 10.35 10 9.5V6C10 5.15 9.35 4.5 8.5 4.5ZM4.5 3.5C4.5 2.65 5.15 2 6 2C6.85 2 7.5 2.65 7.5 3.5V4.5H4.5V3.5Z" fill="black"/>
              </svg>
            </div>

            <div className="text-center text-black text-[15px] font-normal font-['Bricolage Grotesque']">Manager View</div>
          </div>
        </div>
      </div>
      
      
      <div className="flex justify-between gap-6">
        {/* Calendar */}
        <div className="w-[50%] h-[100vh]  bg-white border border-outlineGray rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 gap-y-3 justify-between pt-6 px-6">
            
            {/* Header thing */}
            <div className="grid grid-cols-[8%_25%_67%] py-2 items-center">
              <img className="h-auto max-w-full" src="/calendarIcon.png"/>
              <h1 className="text-2xl">My Calendar</h1>
              <div className="justify-self-end pr-5 w-[197px] h-[41px] bg-[#121212] rounded-[25px] content-center">
                <div className="text-nowrap pl-6 w-36 h-[18.45px] text-white text-[15px] font-normal font-['Bricolage Grotesque']">Go to My Calendar →</div>
              </div>
            </div>
            
            {/* Single row (Tuesday 25) */}
            <div className="grid grid-cols-[7%_93%]">

              {/* Date */}
              <div className="flex flex-col">
                <div className="basis-1/4 w-[52px] h-[30px] text-center text-[#121212] text-base font-medium font-['Bricolage Grotesque']">TUE</div>
                <div className="basis-3/4 w-[52px] h-[30px] text-center text-[#121212] text-[32px] font-medium font-['Bricolage Grotesque']">25</div>
              </div>

              {/* Single job widget in the Calendar section */}
              <CalendarPreviewWidget jobName="ASUCD Coffee House" startTime="9:00 AM" endTime="12:00 PM" location="UC Davis Memorial Union" duration="3 hours" jobColor="bg-[#fd88d0]"/>
            </div>


            {/* Single row (Unitrans Operations, still Tuesday 25) */}
            <div className="grid grid-cols-[7%_93%]">

              {/* (empty) Date */}
              <div className="flex flex-col"/>

              {/* Single job widget in the Calendar section */}
              <CalendarPreviewWidget jobName="Unitrans Operations" startTime="1:00 PM" endTime="3:00 PM" location="UC Davis Memorial Union" duration="2 hours" jobColor="bg-[#2ee084]"/>
            </div>

            {/* Single row (divider) */}
            <div className="grid grid-cols-[10%_90%]">

              {/* (empty) Date */}
              <div className="flex flex-col"/>

              <div className="m-6 w-[95%] h-[0px] border border-[#b6b9ec]"></div>
            </div>


            {/* Single row (Wednesday 26) */}
            <div className="grid grid-cols-[7%_93%]">

              {/* Date */}
              <div className="flex flex-col">
                <div className="basis-1/4 w-[52px] h-[30px] text-center text-[#121212] text-base font-medium font-['Bricolage Grotesque']">WED</div>
                <div className="basis-3/4 w-[52px] h-[30px] text-center text-[#121212] text-[32px] font-medium font-['Bricolage Grotesque']">25</div>
              </div>

              {/* Single job widget in the Calendar section */}
              <CalendarPreviewWidget jobName="ASUCD Coffee House" startTime="10:00 AM" endTime="1:00 PM" location="UC Davis Memorial Union" duration="3 hours" jobColor="bg-[#fd88d0]"/>
          
            </div>

            {/* Single row (Research Lab, still Wednesday 26) */}
            <div className="grid grid-cols-[7%_93%]">

              {/* (empty) Date */}
              <div className="flex flex-col"/>

              {/* Single job widget in the Calendar section */}
              <CalendarPreviewWidget jobName="Prof. Wang's Research Lab" startTime="4:00 PM" endTime="6:00 PM" location="UC Davis Memorial Union" duration="2 hours" jobColor="bg-[#c790ff]"/>
            </div>

          </div>
        </div>

        {/* Job */}
        <div className="w-[50%] h-[100vh] bg-white border border-outlineGray rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 gap-y-3 justify-between pt-6 px-6">
            {/* Header thing */}
            <div className="grid grid-cols-[8%_25%_67%] py-2 items-center">
              <img className="h-auto max-w-full" src="/jobsIcon.png"/>
              <h1 className="text-2xl">My Jobs</h1>
              <img className="h-auto max-w-full justify-self-end pr-2" src="/addJob.png"/>
            </div>

            <JobWidget jobName="ASUCD Coffee House" position="Barista" employmentStatus="Part-Time" bgColor="bg-[#FFEEF8]" borderColor="border border-[#FD88D0]"/>

            <JobWidget jobName="Unitrans Operations" position="Technician" employmentStatus="Part-Time" bgColor="bg-[#DEFBEC]" borderColor="border border-[#2EE085]"/>
            
            <JobWidget jobName="Prof. Wang's Research Lab" position="Lab Assistant" employmentStatus="Part-Time" bgColor="bg-[#F4E9FF]" borderColor="border border-[#C790FF]"/>
            
            <JobWidget jobName="Please Don't Work Four Jobs" position="Sleep-Deprived" employmentStatus="Full-Time" bgColor="bg-[#E0E9FF]" borderColor="border border-[#6293FF]"/>

          </div>
        </div>

      </div>
    </div>
  );
}
  