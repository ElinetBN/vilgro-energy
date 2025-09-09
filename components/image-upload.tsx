"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const ImageUpload = ({ value, onChange }: any) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        appearance={{
          button: "bg-[#1b1b83] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition",
          container: "flex flex-col items-start gap-2",
          allowedContent: "text-sm text-gray-600",
        }}
        onClientUploadComplete={(res) => {
          console.log("Uploaded files:", res);
          if (res?.[0]?.url) {
            onChange(res[0].url); // store uploaded file URL
          }
        }}
        onUploadError={(err) => {
          console.error("Upload error:", err);
        }}
      />

      {value && (
        <img
          src={value}
          alt="Uploaded preview"
          className="mt-2 h-32 w-32 object-cover rounded-lg border"
        />
      )}
    </div>
  );
};
