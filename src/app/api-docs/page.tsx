'use client';

import { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
  };
  [key: string]: unknown;
}

export default function ApiDocsPage() {
  const [spec, setSpec] = useState<OpenAPISpec | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the server OpenAPI spec endpoint
    fetch('/api/docs')
      .then((res) => res.json())
      .then((data) => {
        setSpec(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading Swagger spec:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!spec) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading API Documentation</h1>
          <p className="text-gray-600">Failed to load Swagger specification</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SwaggerUI spec={spec} />
    </div>
  );
}

