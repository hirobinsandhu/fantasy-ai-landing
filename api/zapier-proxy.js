export default async function handler(req, res) {
    console.log("Proxy received request:", req.body); // Debug log

    if (req.method === "POST") {
        try {
            const response = await fetch("https://hooks.zapier.com/hooks/catch/21903949/2gvkxko/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body)
            });

            console.log("Response from Zapier:", response.status); // Log Zapier response

            if (response.ok) {
                console.log("Redirecting user...");
                res.writeHead(302, { Location: "https://winyourleague-ai.com/thank-you.html" });
                res.end();
            } else {
                res.status(500).json({ error: "Failed to send request to Zapier" });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Failed to send request to Zapier" });
        }
    } else {
        console.log("Invalid request method:", req.method);
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
