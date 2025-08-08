### SLUDI (MOSIP) Authentication API (Mocked)

- **Endpoint:** `/auth/:MISP-LK/:Auth-Partner-ID/:API-Key`
- **Method:** POST
- **Headers:**
  - `Authorization: Bearer MOCK-API-KEY`
- **Body:**
  - Follows MOSIP structure including `individualId`, `request.staticPin`, etc.

- **Success PIN:** `test123`
- **Success ID:** `1234567890`
- **Response:** `token`, `role`, and `transactionID` on success
