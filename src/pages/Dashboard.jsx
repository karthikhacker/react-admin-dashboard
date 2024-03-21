import BuyerChart from "../components/BuyerChart"
import PopularProducts from "../components/PopularProducts"
import RecentOrders from "../components/RecentOrders"
import Stats from "../components/Stats"
import TransacttionChart from "../components/TransacttionChart"

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4 mx-4 my-2">
            <Stats />
            <div className="flex flex-row gap-4 w-full">
                <TransacttionChart />
                <BuyerChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}

export default Dashboard