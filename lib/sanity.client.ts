import {createClient} from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.NEXT_PUBLIC_SANITY_TOKENNEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source : any) => builder.image(source);