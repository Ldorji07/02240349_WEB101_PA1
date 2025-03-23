const BASE_URL = "https://api.jikan.moe/v4"; // ✅ Using a working API

export const getAnimeList = async () => {
  try {
    const res = await fetch(`${BASE_URL}/top/anime`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.data || []; // Ensuring we return an array
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const getAnimeDetails = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/anime/${id}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
