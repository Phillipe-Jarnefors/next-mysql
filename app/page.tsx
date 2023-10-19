"use client"
import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-2xl py-6">TextEditor</h1>
      <p className="text-medium w-[70%] lg:py-7 text-center leading-snug">
        Create, delete, edit and preview your documents in this app. This
        application runs on a Next.js codebase with SSR and with MySQL database
        storage.
      </p>
      <section className="container pt-6 animate-fade-in xl:z-10 xl:h-full xl:w-1/2 grid grid-cols-4 grid-rows-layout col-span-1 gap-2 mt-3 ">
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center ">
          <Icon
            icon="basil:document-outline"
            className="w-cards h-cards"
            color="#001829"
          />
        </div>
        <div className="col-span-1 bg-abstract rounded-lg  "></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-secondary rounded-lg flex justify-center items-center ">
          <Icon
            icon="heroicons:paper-clip-solid"
            className="w-cards h-cards"
            color="#001829"
          />
        </div>
        <div className="col-span-4 bg-abstract rounded-lg"></div>
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center ">
          <Icon
            icon="system-uicons:write"
            className="w-cards h-cards"
            color="#001829"
          />
        </div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-secondary rounded-lg flex justify-center items-center ">
          <Icon
            icon="ant-design:read-outlined"
            className="w-cards h-cards"
            color="#001829"
          />
        </div>
        <div className="col-span-4 bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center">
          <Icon
            icon="ph:database-duotone"
            className="w-cards h-cards"
            color="#001829"
          />
        </div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
      </section>
    </main>
  )
}
