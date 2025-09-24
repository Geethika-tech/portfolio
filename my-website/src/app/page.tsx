import Image from "next/image";
import DashboardPage from "./dashboard/page";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
  return (
    <div>
    <DashboardLayout>
    <DashboardPage/>
    </DashboardLayout>
    </div>
  );
}
