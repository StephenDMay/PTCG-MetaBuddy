"use client";

import React from "react";
import Image from "next/image";
import imageLoader from "@/lib/image-loader";

interface ListItem {
  id: string | number;
  imageUrl?: string;
  imageAlt?: string;
  name: string;
  value: {
    text: string;
    colorClassName: string;
  };
}

interface ListReportProps {
  headerLeft: string;
  headerRight: string;
  items: ListItem[];
}

export function ListReport({ headerLeft, headerRight, items }: ListReportProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2 items-center text-sm">
      <span className="font-bold col-span-2">{headerLeft}</span>
      <span className="font-bold text-right">{headerRight}</span>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.imageAlt || ""}
              width={24}
              height={24}
              className="rounded-full"
              loader={imageLoader}
            />
          ) : (
            <div style={{ width: 24 }}></div> // Placeholder for alignment
          )}
          <span>{item.name}</span>
          <span className={`font-bold text-right ${item.value.colorClassName}`}>
            {item.value.text}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
