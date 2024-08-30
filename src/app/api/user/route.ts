import { userData } from "@/utils/data/dummyUserData";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = headers();
  const value = headersList.get("searchvalue");
  const key = headersList.get("searchkey");
  if (!value || !key) return;

  const find = userData.filter((val) => {
    const data = val[key as keyof typeof val]
      ?.toString()
      .toLowerCase()
      .includes(value);
    return data;
  });
  console.log({ data2: find });

  return NextResponse.json({ find }, { status: 200 });
}
