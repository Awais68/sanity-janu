import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { blog } from "@/sanity/schemaTypes/blog";
import Image from "next/image";
// import Blog from "./Blog";
import Navbar from "./Navbar";
import Carosal from "./Carosal";
import DataFetch from "./components/DataFetch";


export default async function Home() {
  return (
    <div>
      <h1 className="flex mx-auto text-center justify-between p-3 font-bold text-xl  bg-blue-200 container">
        {" "}
        <span>Today's Learner</span> Sanity Learning{" "}
        <span>Tomorrow's Leader</span>{" "}
      </h1>
      <Navbar />
      <Carosal />
      {/* <Blog />                           */}

      <DataFetch />
    </div>
  );
}
