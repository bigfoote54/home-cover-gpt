#!/bin/bash
echo "Starting build process for version 1.0.6..."
echo "Generating Prisma client..."
npx prisma generate
echo "Building Next.js application..."
npm run build
echo "Build completed!"