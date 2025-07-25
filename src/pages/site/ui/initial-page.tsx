import { Header, MainContainer } from "@shared/ui/layout";
import { ArrowIcon, PlusIcon } from "@shared/assets";
import { useNavigate } from "react-router";
import { SiteList } from "./initial/site-list";
import { useTrans } from "@shared/lib/utils";
import { Button } from "@shared/ui/common";
import { AddSitePanel } from "@features/site/ui/add-site-panel";
import { usePanelController } from "@shared/lib/panel";


const SitePage = () => {
    const trans = useTrans();
    const navigate = useNavigate();

    const { isOpen, openPanel, closePanel } = usePanelController("trend-panel");

    return (
        <>
            <Header
                left={
                    <Button onClick={() => navigate("/")}>
                        <ArrowIcon />
                    </Button>
                }
                right={
                    <Button onClick={openPanel} className="flex flex-row gap-5 px-5 items-center text-sm font-medium">
                        <PlusIcon />
                        {trans("site.add", "사이트 등록")}
                    </Button>
                }
            />
            <MainContainer className="pt-5 max-sm:pt-5">
                <SiteList />
            </MainContainer>
            <AddSitePanel isOpen={isOpen} onClose={closePanel} />
        </>
    );
}

export default SitePage;