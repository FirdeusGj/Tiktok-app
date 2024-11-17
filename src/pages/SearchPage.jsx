import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q");

  return <div>SearchPage ID: {id}</div>;
}
