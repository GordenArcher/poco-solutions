import { useState } from "react"
import Tab1 from '../layout/Tab1'
import Tab2 from '../layout/Tab2'
import Tab3 from '../layout/Tab3'

const Slider = () => {

    const [activeTab, setActiveTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[20px]">
        <div className='relative'>
            <h4 className='text-[#103e91] !font-extrabold'>MORE ABOUT US</h4>
        </div>

        <div className="w-full h-full !mt-[40px]">
            <div className="flex flex-col gap[50px]">
                <div className="!p-3">
                    <div className="max-w-[500px] !p-1 !m-auto rounded-4xl w-full bg-[#0000006e] flex items-center justify-center">
                        {[
                            { id: "tab1", label: "Expertise 📖" },
                            { id: "tab2", label: "Speed ⏳" },
                            { id: "tab3", label: "Secure 🔒" },
                        ].map(({ id, label }) => (
                            <button
                            key={id}
                            className={`!py-[10px] !px-[40px] max-sm:!p-[10px] cursor-pointer rounded-4xl text-[#fff] !font-bold transition-all duration-300 
                                ${activeTab === id ? "bg-[#103e91]" : "hover:bg-[#103e91]"}`}
                            onClick={() => setActiveTab(id)}
                            >
                            {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="!mt-[80px] w-full">
                    <div className="!p-2 relative">
                        {activeTab === "tab1" && <Tab1 /> }
                        {activeTab === "tab2" && <Tab2 /> }
                        {activeTab === "tab3" && <Tab3 /> }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
