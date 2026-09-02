import { useState } from "react";

import Layout from "./components/Layout";
import DaoTao from "./pages/DaoTao";
import PhanCongCa from "./pages/PhanCongCa";
import TonKho from "./pages/TonKho";
import DanhMucSanPham from "./pages/DanhMucSanPham";

import { productCatalog } from "./data/productCatalog";

const DEFAULT_PAGE = "daoTao";
const DEFAULT_GROUP_ID = productCatalog[0].id;

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    return (
      localStorage.getItem("activePage") ||
      DEFAULT_PAGE
    );
  });

  const [
    activeProductGroupId,
    setActiveProductGroupId,
  ] = useState(() => {
    return (
      localStorage.getItem(
        "activeProductGroupId"
      ) || DEFAULT_GROUP_ID
    );
  });

  const handleNavigate = (
    pageId,
    productGroupId = null
  ) => {
    setActivePage(pageId);
    localStorage.setItem("activePage", pageId);

    if (productGroupId) {
      setActiveProductGroupId(productGroupId);

      localStorage.setItem(
        "activeProductGroupId",
        productGroupId
      );
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case "phanCongCa":
        return <PhanCongCa />;

      case "tonKho":
        return <TonKho />;

      case "danhMucSanPham":
        return (
          <DanhMucSanPham
            groupId={activeProductGroupId}
          />
        );

      case "daoTao":
      default:
        return <DaoTao />;
    }
  };

  return (
    <Layout
      activePage={activePage}
      activeProductGroupId={
        activeProductGroupId
      }
      onNavigate={handleNavigate}
    >
      {renderPage()}
    </Layout>
  );
}