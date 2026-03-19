"use client"; 

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Only show Vision tool to you (Admin), hide from the Client (Editor)
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // CUSTOMIZE LOGIN
  auth: {
    loginMethod: 'dual', // Allows both Sanity login and custom if needed
  },
  // SET THE TITLE THE CLIENT SEES
  title: 'Sire Restaurant Management', 
})
