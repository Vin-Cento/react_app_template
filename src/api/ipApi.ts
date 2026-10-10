export interface IPInfo {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  cityName: string;
  regionName: string;
  timeZone: string;
  zipCode: string;
}

export async function fetchIPInfo(
  ip?: string
): Promise<IPInfo> {
  const url = ip
    ? `https://freeipapi.com/api/json/${encodeURIComponent(ip)}`
    : "https://freeipapi.com/api/json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch IP info: ${response.status}`);
  }

  return response.json();
}
