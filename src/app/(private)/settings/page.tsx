import PrivateRoute from "@/components/guards/private-route";
import PageWrapper from "@/components/page-wrapper";

export default function Page() {
    return (
        <PrivateRoute>
            <PageWrapper title="Settings">
                settings
            </PageWrapper>
        </PrivateRoute>
    )
}