export default async function handler(req, res) {
  if (req.method === "POST") {
    const url = "https://cleanuri.com";
    const shortenAPI = `${url}/api/v1/shorten`;

    try {
      const response = await fetch(shortenAPI, {
        method: "POST",
        body: JSON.stringify(req.body), // Kirim data permintaan dari klien ke API pihak ketiga
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataJSON = await response.json();
      res.status(200).json(dataJSON); // Kirim respons dari API pihak ketiga ke klien
    } catch (error) {
      console.error("Fetch error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]); // Setel header Allow untuk menunjukkan metode yang diizinkan
    res.status(405).end("Method Not Allowed"); // Kembalikan respons "Method Not Allowed" jika metode selain POST
  }
}
