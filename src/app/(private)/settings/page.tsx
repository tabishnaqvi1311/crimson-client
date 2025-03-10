import PrivateRoute from "@/components/guards/private-route";
import PageWrapper from "@/components/page-wrapper";
import Settings from "@/components/settings/settings";

export default function Page() {
    return (
        <PrivateRoute>
            <PageWrapper title="Settings" backButton>
                <Settings/>
            </PageWrapper>
        </PrivateRoute>
    )
}