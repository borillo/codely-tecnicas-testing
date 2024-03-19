import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json({ results: [{ name: "Ricardo Borillo" }] });
  }),
];
