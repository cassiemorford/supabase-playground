import { match } from "assert";
import { NextRequest, NextResponse } from "next/server";
import { useMemo } from "react";

interface PokeApiResponse {
  results: any[];
}
// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const resp = await fetch("https://pokeapi.co/api/v2/berry?limit=100");
  const { results } = (await resp.json()) as PokeApiResponse;
  console.log(results);
  const matchingResults = results.filter((berry) => berry.name.includes(query));
  console.log(matchingResults);

  return NextResponse.json({ berries: matchingResults }, { status: 200 });
}
