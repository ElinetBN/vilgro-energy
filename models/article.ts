import mongoose, { Schema, type Document, type Model } from "mongoose"

export interface IArticle extends Document {
  _id: string
  title: string
  content: string
  excerpt: string
  status: "draft" | "published"
  tags: string[]
  author: string
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  slug: string
  featuredImage?: string
  readTime?: number
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [1, "Content cannot be empty"],
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
      maxlength: [500, "Excerpt cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    author: {
      type: String,
      required: [true, "Author is required"],
      default: "Admin",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    featuredImage: {
      type: String,
      validate: {
        validator: (v: string) => {
          if (!v || v.trim() === "") return true // Allow empty values
          return /^\/uploads\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(v)
        },
        message: "Featured image must be an uploaded file path",
      },
    },
    readTime: {
      type: Number,
      min: 1,
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Indexes for better query performance
ArticleSchema.index({ status: 1, createdAt: -1 })
ArticleSchema.index({ slug: 1 })
ArticleSchema.index({ tags: 1 })
ArticleSchema.index({ publishedAt: -1 })

// Pre-save middleware to generate slug and calculate read time
ArticleSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  if (this.isModified("content")) {
    // Calculate read time (average 200 words per minute)
    const wordCount = this.content.split(/\s+/).length
    this.readTime = Math.ceil(wordCount / 200)
  }

  if (this.isModified("status") && this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date()
  }

  next()
})

// Static methods for common queries
ArticleSchema.statics.findPublished = function () {
  return this.find({ status: "published" }).sort({ publishedAt: -1 })
}

ArticleSchema.statics.findBySlug = function (slug: string) {
  return this.findOne({ slug })
}

ArticleSchema.statics.findByTag = function (tag: string) {
  return this.find({ tags: tag, status: "published" }).sort({ publishedAt: -1 })
}

// Prevent model re-compilation in development
const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema)

export default Article
