import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { blog } from "@/sanity/schemaTypes/blog";
import Image from "next/image";

export default async function Blog() {
  async function getData() {
    const fetchData = await client.fetch(`*[_type == "blog"] {
    name,
    age,
     "imageUrl": image.asset->url
   
  }`);
    return fetchData;
  }

  const data = await getData();
  console.log(data);

  return (
    <div className="flex min-w-80% justify-center ">
      {data.map((data: any) => (
        <div
          className="flex flex-col items-center justify-center p-4 m-4 bg-blue-200 rounded-xl sm:flex-col bg-emerald-100 "
          key={data.name}
        >
          <h1>{data.name}</h1>
          <p>{data.age}</p>
          <Image
            src={urlFor(data.imageUrl).url() as string}
            width={200}
            height={200}
            className="rounded-xl "
          />
        </div>
      ))}
    </div>
  );
}
