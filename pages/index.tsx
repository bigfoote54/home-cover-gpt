// pages/index.tsx
import { useState } from 'react';
import FileUpload from '../components/FileUpload';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Home Cover GPT</h1>
      <p className="mb-6 text-center max-w-xl">
        Upload your homeowners insurance policy and get GPT-powered recommendations.
      </p>
      <FileUpload />
    </div>
  );
}
