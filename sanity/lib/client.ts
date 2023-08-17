import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skjWDKCWfxx5tqf78R3AWrYYwZMwVUQKb0pVZERNnTHEmiUnHTv51UXiVkKKMM6pxjhIXZPy7yFBJbRd70vS8yLxvcRCxnsplNcUFE8UrUDEVgEVlUHg8eUDPKS9QLghM6KXxAZqwWowsDA3Pg66AsuneulHCFG4j3XCzac4MHs6jozY7kWr",
})
