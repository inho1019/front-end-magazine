import { MagazineItem } from "@features/magazine";
import { MagazinePanel } from "@features/magazine/ui/magazine-panel";
import { useDataContext } from "@shared/lib/data";
import type { ParserData } from "@shared/model/parser";
import { useCallback, useState } from "react";


export const MagazineList = () => {
    const data = useDataContext();

    const [selectedData, setSelectedData] = useState<ParserData | null>(null);

    const handleClickItem = useCallback((data: ParserData) => {
        setSelectedData(data);
    }, []);

    const handleClosePanel = useCallback(() => {
        setSelectedData(null);
    }, []);
    
    return (
        <>
            <div className="flex flex-col divide-y-1 divide-gray-200">
                {
                    data?.map((item, index) => (
                        <MagazineItem 
                            key={index} 
                            data={item}
                            onClick={() => handleClickItem(item)}
                            className="cursor-pointer py-15 px-10" 
                        />
                    ))
                }
            </div>
            <MagazinePanel isOpen={!!selectedData} data={selectedData} onClose={handleClosePanel} />
        </>
    );
}