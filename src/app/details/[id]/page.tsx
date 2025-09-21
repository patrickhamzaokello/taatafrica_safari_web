"use client"

import React from "react"
import { useParams, useRouter } from "next/navigation"
import { getPackageById } from "@/lib/packages"
import { PackageDetailPage } from "@/components/PackageDetailPage"

export default function PackagePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const packageData = getPackageById(id)

  if (!packageData) {
    return <div>Package not found</div>
  }

  return (
    <PackageDetailPage 
      packageData={packageData} 
      onBack={() => router.push("/#Featured")} 
    />
  )
}
