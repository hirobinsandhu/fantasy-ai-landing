export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const response = await fetch("https://hooks.zapier.com/hooks/catch/21903949/2gvkxko/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body)
            });

            res.writeHead(302, { Location: "https://winyourleague-ai.com/thank-you.html" });
            res.end();
        } catch (error) {
            res.status(500).json({ error: "Failed to send request to Zapier" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}

