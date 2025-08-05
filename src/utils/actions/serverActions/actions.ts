"use server";

import { WPImage } from "@/utils/interfaces";
import { ApiResponseType } from "@/utils/types";

export const fetchData = async (endpoint:string = ''): Promise<ApiResponseType> => {
    const res = await fetch(process.env.WP_API_ACF + endpoint, { cache: 'force-cache' });
    const data = await res.json();

    return data[0];
};

export const fetchMedia = async (endpoint: string | number): Promise< WPImage | undefined > => {
    if(process.env.WP_API_MEDIA) {
        const res = await fetch(process.env.WP_API_MEDIA + endpoint, { cache: 'force-cache'} );
        const data = await res.json();
        
        return data
    };
};
