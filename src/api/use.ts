import { getAction, postAction } from "./index";


export const useInfo = (params:any) => getAction('/mock/use',params);