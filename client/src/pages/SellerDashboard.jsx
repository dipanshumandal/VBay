import React from 'react'
import DashboardSidebar from "../components/DashboardSidebar"
import ProductManagement from '../components/seller/ProductManagement'

const SellerDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>{/* we will change the pages through switch case here */}</div>
      <ProductManagement />
    </div>
  );
};

export default SellerDashboard;