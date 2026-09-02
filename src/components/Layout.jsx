import { useState } from "react";
import { Bell, ChevronDown, Menu, Search, MapPin } from "lucide-react";

import Sidebar from "./Sidebar";

export default function Layout({
  activePage,
  activeProductGroupId,
  onNavigate,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Ẩn toàn bộ Sidebar khi in */}
      <div className="app-sidebar">
        <Sidebar
          activePage={activePage}
          activeProductGroupId={activeProductGroupId}
          onNavigate={onNavigate}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>

      {/* Loại bỏ khoảng trống sidebar khi in */}
      <div className="app-shell lg:pl-72">
        {/* Loại bỏ padding của layout khi in */}
        <main className="app-main p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
