import { Users, Building2 } from "lucide-react";
import { FaMoneyBill } from "react-icons/fa";

const Status = () => {
  // Demo data matching the image
  const demoData = {
    totalUsers: 1200,
    totalEarning: 932,
    totalCompany: 32,
    totalBalance: 15420,
    totalRentalOuts: 84,
    totalScheduledPickups: 23,
    overdueRentals: 7,
  };

  // Uncomment this when API integration is ready
  // const { data: responseData } = useGetDashboardDataQuery(undefined, {
  //   refetchOnMountOrArgChange: true,
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  // });

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mb-5">
      {/* Total Users */}
      <div className="flex-1 min-h-24 flex items-center gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
        <Users className="size-10 text-primary" />
        <div className="space-y-1">
          <h1 className="font-medium text-gray-600 text-sm">Total Drivers</h1>
          <h1 className="text-2xl font-bold text-gray-900">
            {demoData.totalUsers.toLocaleString()}
          </h1>
        </div>
      </div>

      {/* Total Earning */}
      <div className="flex-1 min-h-24 flex items-center gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
        <FaMoneyBill className="size-10 text-primary" />
        <div className="space-y-1">
          <h1 className="font-medium text-gray-600 text-sm">Total Earning</h1>
          <h1 className="text-2xl font-bold text-gray-900">
            ${demoData.totalEarning}
          </h1>
        </div>
      </div>

      {/* Total Company */}
      <div className="flex-1 min-h-24 flex items-center gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
        <Building2 className="size-10 text-primary" />
        <div className="space-y-1">
          <h1 className="font-medium text-gray-600 text-sm">Total Company</h1>
          <h1 className="text-2xl font-bold text-gray-900">
            {demoData.totalCompany}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Status;
