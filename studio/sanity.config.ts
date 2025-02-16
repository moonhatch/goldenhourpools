import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {presentationTool, DocumentLocationResolver, defineDocuments} from 'sanity/presentation'
import {Observable, map} from 'rxjs'
import {structure} from './src/structure'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: process.env.SANITY_STUDIO_PROJECT_NAME || 'project-name',
  title: process.env.SANITY_STUDIO_PROJECT_TITLE || 'Project Name',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure,
    }),
    presentationTool({
      previewUrl: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type == "page" && slug.current == 'index'`,
          },
          {
            route: '/:slug',
            filter: `_type == "page" && slug.current == $slug`,
          },
        ]),
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
