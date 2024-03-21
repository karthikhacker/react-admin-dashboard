import StatsWrapper from "./StatsWrapper"
import { IoBagHandleOutline } from "react-icons/io5";

const Stats = () => {
    return (
        <div className="flex  gap-4 w-full">
            <StatsWrapper>
                <div className="w-12 h-12 bg-sky-500 flex items-center justify-center rounded-full">
                    <IoBagHandleOutline fontSize={24} className="text-white" />

                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3245</strong>
                        <span className="text-sm  pl-2 text-green-500">+324</span>
                    </div>
                </div>
            </StatsWrapper>
            <StatsWrapper>
                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-full">
                    <IoBagHandleOutline fontSize={24} className="text-white" />

                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3245</strong>
                        <span className="text-sm  pl-2 text-green-500">+324</span>
                    </div>
                </div>
            </StatsWrapper>
            <StatsWrapper>
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-full">
                    <IoBagHandleOutline fontSize={24} className="text-white" />

                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500">Total customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3245</strong>
                        <span className="text-sm  pl-2 text-green-500">+324</span>
                    </div>
                </div>
            </StatsWrapper>
            <StatsWrapper>
                <div className="w-12 h-12 bg-green-800 flex items-center justify-center rounded-full">
                    <IoBagHandleOutline fontSize={24} className="text-white" />

                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500">Total orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3245</strong>
                        <span className="text-sm  pl-2 text-green-500">+324</span>
                    </div>
                </div>
            </StatsWrapper>
        </div>
    )
}

export default Stats