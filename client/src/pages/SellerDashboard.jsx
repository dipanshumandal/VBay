import React from 'react'
import DashboardSidebar from "../components/DashboardSidebar"
import ProductManagement from '../components/seller/ProductManagement'
import Analytics from '../components/Analytics';

const SellerDashboard = () => {
  const tab = useSelector((state) => state.nav.tab);
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>
        {(() => {
          switch (tab) {
            case "photos-management":
              return <ProductManagement />;
            case "analytics":
              return <Analytics />;
            case "orders":
              return <Orders />;

            default:
              return <ProductManagement />;
          }
        })()}
      </div>
    </div>
  );
};

export default SellerDashboard;