import { useState } from "react";
import { Menu } from "lucide-react";
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
      <div className="app-sidebar">
        <Sidebar
          activePage={activePage}
          activeProductGroupId={activeProductGroupId}
          onNavigate={onNavigate}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>

      <div className="app-shell lg:pl-72">
        {/* Header chỉ hiện trên mobile/tablet */}
        <header className="app-header sticky top-0 z-20 flex h-16 items-center border-b border-slate-200 bg-white px-4 shadow-sm lg:hidden">
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setOpen(true)}
            className="rounded-xl p-2 text-brand-green transition hover:bg-emerald-50"
          >
            <Menu size={25} />
          </button>

          <p className="ml-3 text-base font-extrabold text-brand-green">
            STORE MANAGER
          </p>
        </header>

        <main className="app-main p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}