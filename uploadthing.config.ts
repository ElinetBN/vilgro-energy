// uploadthing.config.ts
import { createUploadthing } from "uploadthing/server"

const f = createUploadthing()

export const ourFileRouter = {
  articleImage: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Uploaded file", file.url)
    }),
}
