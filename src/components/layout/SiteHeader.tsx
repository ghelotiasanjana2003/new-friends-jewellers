import { RatesBar } from "@/components/layout/RatesBar";
import { Navbar } from "@/components/layout/Navbar";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <RatesBar />
      <Navbar />
    </div>
  );
}
