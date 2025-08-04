"use server";

import { ApiResponseType } from "@/utils/types";

export const fetchData = async (endpoint:string = ''): Promise<ApiResponseType> => {
    const res = await fetch(process.env.WP_API_ACF + endpoint, { cache: 'force-cache' });
    const data = await res.json();

    return data[0];
};

