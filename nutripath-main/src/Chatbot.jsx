import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// IMPORTANT:
// Do not put your real API key directly in React frontend code.
// Use a backend/server for the API key.
const client = new GoogleGenAI({
    apiKey:apiKey
});

function Chatbot() {

    const navigate = useNavigate();

    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    async function send() {

        if (msg.trim() === "" || loading) {
            return;
        }

        const userMsg = msg.trim();

        setChat((oldChat) => [
            ...oldChat,
            {
                user: "Me",
                text: userMsg
            }
        ]);

        setMsg("");
        setLoading(true);

        try {

            const response =
                await client.models.generateContent({

                    model: "gemini-3.5-flash",

                    contents: userMsg,

                });

            setChat((oldChat) => [
                ...oldChat,
                {
                    user: "Bot",
                    text: response.text
                }
            ]);

        } catch (error) {

            console.log(error);

            setChat((oldChat) => [
                ...oldChat,
                {
                    user: "Bot",
                    text: "Sorry, something went wrong. Please try again."
                }
            ]);

        } finally {

            setLoading(false);

        }
    }


    function handleKeyDown(e) {

        if (e.key === "Enter") {
            send();
        }

    }


    return (

        <div className="chatbot-page">

            {/* Header */}

            <div className="chatbot-header">

                <button
                    className="chat-back-btn"
                    onClick={() => navigate("/Dashboard")}
                >
                    ← Dashboard
                </button>

                <div className="chat-title">

                    <div className="bot-avatar">
                        AI
                    </div>

                    <div>
                        <h1>Nutrition Assistant</h1>

                        <p>
                            Your personalized diet companion
                        </p>
                    </div>

                </div>

                <div className="online-status">
                    <span></span>
                    Online
                </div>

            </div>


            {/* Chat Window */}

            <div className="chat-container">

                {chat.length === 0 && (

                    <div className="welcome-message">

                        <div className="welcome-avatar">
                            AI
                        </div>

                        <h2>
                            Hello! I'm your Nutrition Assistant
                        </h2>

                        <p>
                            Ask me about diet plans, healthy foods,
                            nutrition, meal ideas, or your fitness goals.
                        </p>

                        <div className="suggestions">

                            <button
                                onClick={() =>
                                    setMsg(
                                        "Suggest a healthy breakfast"
                                    )
                                }
                            >
                                Healthy breakfast
                            </button>

                            <button
                                onClick={() =>
                                    setMsg(
                                        "What foods are rich in protein?"
                                    )
                                }
                            >
                                Protein-rich foods
                            </button>

                            <button
                                onClick={() =>
                                    setMsg(
                                        "Give me healthy lunch ideas"
                                    )
                                }
                            >
                                Lunch ideas
                            </button>

                        </div>

                    </div>

                )}


                {/* Messages */}

                <div className="messages">

                    {chat.map((e, i) => (

                        <div
                            key={i}
                            className={
                                e.user === "Me"
                                    ? "message user-message"
                                    : "message bot-message"
                            }
                        >

                            <div className="message-avatar">

                                {e.user === "Me"
                                    ? "ME"
                                    : "AI"}

                            </div>

                            <div className="message-content">

                                <span className="message-name">
                                    {e.user === "Me"
                                        ? "You"
                                        : "Nutrition Assistant"}
                                </span>

                                <p>
                                    {e.text}
                                </p>

                            </div>

                        </div>

                    ))}


                    {loading && (

                        <div className="message bot-message">

                            <div className="message-avatar">
                                AI
                            </div>

                            <div className="message-content">

                                <span className="message-name">
                                    Nutrition Assistant
                                </span>

                                <div className="typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </div>


            {/* Input Area */}

            <div className="chat-input-area">

                <div className="chat-input-box">

                    <input
                        type="text"
                        value={msg}
                        onChange={(e) =>
                            setMsg(e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Ask something about nutrition..."
                    />

                    <button
                        onClick={send}
                        disabled={loading || msg.trim() === ""}
                    >
                        Send
                    </button>

                </div>

                <p className="chat-disclaimer">
                    AI-generated nutrition information may not be
                    suitable for individual medical needs.
                </p>

            </div>

        </div>

    );
}

export default Chatbot;