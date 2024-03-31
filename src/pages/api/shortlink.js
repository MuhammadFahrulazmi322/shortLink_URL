export default function handler(req, res) {
  const url = "https://cleanuri.com";
  const shortenAPI = `${url}/api/v1/shorten`;

  res.status(200).json({ shortenAPI });
  
}
