import Status from "../../component/Main/Dashboard/Status";
import EarningsChart from "../../component/Main/Dashboard/EarningsChart";
import RecentTransactions from "../../component/Main/Dashboard/RecentTransactions";
const DashboardHome = () => {
  return (
    <div className="w-full px-5  space-y-5 bg-[#F5F5F5]">
      <Status />
      <EarningsChart />
      <RecentTransactions/>
    </div>
  );
};

export default DashboardHome;
