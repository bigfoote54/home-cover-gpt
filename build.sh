#!/bin/bash
echo "Starting build process for version 1.0.5..."
echo "Generating Prisma client..."
npx prisma generate
echo "Building Next.js application..."
npx next build
echo "Build completed!"