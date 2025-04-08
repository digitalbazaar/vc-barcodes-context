/*!
 * Copyright (c) 2025 Digital Bazaar, Inc. All rights reserved.
 */
// Use JSON style for context
/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
/* eslint-disable max-len */

export default
/* context-url: https://w3id.org/vc-barcodes//v1 */
/* context-begin */
{
  "@context": {
    "@protected": true,
    "id": "@id",
    "type": "@type",
    "MachineReadableZone": "https://w3id.org/vc-barcodes#MachineReadableZone",
    "AamvaDriversLicenseScannableInformation": "https://w3id.org/vc-barcodes#AamvaDriversLicenseScannableInformation",
    "protectedComponentIndex": {
      "@id": "https://w3id.org/vc-barcodes#protectedComponentIndex",
      "@type": "https://w3id.org/security#multibase"
    },
    "OpticalBarcodeCredential": "https://w3id.org/vc-barcodes#OpticalBarcodeCredential",
    "TerseBitstringStatusListEntry": {
      "@id": "https://w3id.org/vc-barcodes#TerseBitstringStatusListEntry",
      "@context": {
        "@protected": true,
        "id": "@id",
        "type": "@type",
        "terseStatusListBaseUrl": {
          "@type": "@id",
          "@id": "https://w3id.org/vc-barcodes#terseStatusListBaseUrl"
        },
        "terseStatusListIndex": "https://w3id.org/vc-barcodes#terseStatusListIndex"
      }
    }
  }
}
/* context-end */;
