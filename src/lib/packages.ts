import { SafariPackage } from "@/types/safari-packages";
import {packages} from "./safaripackages.json"


export function getPackageById(id: string) {
return packages.find((pkg: SafariPackage) => pkg.id === id)
}

//get all packages
export function getAllPackages() {
  return packages;
}
