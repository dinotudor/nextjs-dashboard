import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import {
    fetchRevenue,
    fetchLatestInvoices,
    fetchCardData,
} from "@/app/lib/data";

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestsInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Total Paid invoices"
                    type="collected"
                    value={totalPaidInvoices}
                />
                <Card
                    title="Pending invoices"
                    type="pending"
                    value={totalPendingInvoices}
                />
                <Card
                    title="Total Invoices"
                    type="invoices"
                    value={numberOfInvoices}
                />
                <Card
                    title="Number of customers"
                    type="customers"
                    value={numberOfCustomers}
                />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestsInvoices} />
            </div>
        </main>
    );
}
