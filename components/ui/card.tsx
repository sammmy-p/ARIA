import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b pb-2">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="font-semibold">{children}</h2>
);

export const CardContent = ({ children }) => (
  <div>{children}</div>
);
