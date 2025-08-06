"use server";

import { WPImage } from "@/utils/interfaces";
import { ApiResponseType, ComponentDataType} from "@/utils/types";

export const fetchData = async (endpoint:string): Promise<ApiResponseType> => {
    const res = await fetch(process.env.WP_API_ACF + endpoint, { cache: 'force-cache' });
    // const res = await fetch(process.env.WP_API_ACF + endpoint);
    const data = await res.json();

    return data;
};

export const fetchMedia = async (endpoint: string | number): Promise< WPImage | undefined > => {
    if(process.env.WP_API_MEDIA) {
        const res = await fetch(process.env.WP_API_MEDIA + endpoint, { cache: 'force-cache'} );
        const data = await res.json();
        
        return data
    };
};

export const fetchComponent = async (component: string): Promise< ComponentDataType > => {
    const res = await fetch(process.env.WP_API_ACF + 'component', { cache: 'force-cache' });
    const data = await res.json() as Array<ComponentDataType>;

    const componentData = (data.find((item, i) => { return data[i].acf.component_selector === component }) as ComponentDataType)

    return componentData;
};
