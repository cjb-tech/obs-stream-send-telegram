import fetch from "node-fetch";
import {get} from "./config.js";

export async function sendMessage(streamData) {
  const {
    BotToken,
  } = get("Telegram");
  const chats = get("Chats");
  for(let chat of chats) {
    if(chat.PrivacyStatuses.includes(streamData.privacyStatus)) {
      sendMessageToChat(chat.ChatId, BotToken, streamData.url);
    }
  }
}

async function sendMessageToChat(ChatId, BotToken, message) {
  await fetch(`https://api.telegram.org/bot${BotToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: ChatId,
      text: message,
      silent: true,
    })
  });
}
