export const addCategory = async ({
  categoryName,
  categoryDescription,
}: {
  categoryName: string;
  categoryDescription: string;
}) => {
  if (!categoryName || !categoryDescription) return;

  const sold = Math.floor(Math.random() * 50000);
  const stock = Math.floor(Math.random() * 500);

  const res = await fetch("/api/category", {
    method: "POST",
    body: JSON.stringify({ categoryName, categoryDescription, sold, stock }),
  });

  if (!res.ok) return console.log("Error while fetching data");
  const data = await res.json();

  return data;
};

export const getCategory = async () => {
  const res = await fetch("/api/category");

  if (!res.ok) return console.log("Error while fetching data");
  const data = await res.json();

  return data;
};
