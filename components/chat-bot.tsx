"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialBotMessages = [
  "Hi there! I'm the Beyond Measure assistant. How can I help you today?",
  "I can answer questions about creating projects, funding, or how our platform works.",
]

const botResponses: Record<string, string[]> = {
  project: [
    "Creating a project is easy! Just click the 'Create a Project' button in the navigation menu.",
    "You'll need to provide details about your classroom needs, funding goal, and how the resources will benefit your students.",
  ],
  fund: [
    "Beyond Measure ensures 100% of donations go directly to your classroom.",
    "Donors can browse projects and contribute any amount to help you reach your funding goal.",
  ],
  contact: [
    "You can reach our team by filling out the contact form on this page.",
    "We typically respond within 1-2 business days.",
  ],
  account: [
    "To create an account, click the 'Register' button in the top navigation.",
    "You'll need to verify your status as a teacher at a Christian school during registration.",
  ],
  help: [
    "I'm here to help! You can ask me about creating projects, funding, account setup, or any other questions about Beyond Measure.",
    "If you need more assistance, you can also fill out the contact form on this page.",
  ],
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [messageId, setMessageId] = useState(1)

  // Initialize chat with bot greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const initialMessages = initialBotMessages.map((text, index) => ({
        id: index,
        text,
        sender: "bot" as const,
        timestamp: new Date(),
      }))
      setMessages(initialMessages)
      setMessageId(initialMessages.length)
    }
  }, [messages.length, isOpen])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isMinimized])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messageId,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessageId((prev) => prev + 1)
    setInputValue("")

    // Generate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messageId + 1,
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setMessageId((prev) => prev + 1)
    }, 600)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for keywords in the input
    for (const [keyword, responses] of Object.entries(botResponses)) {
      if (input.includes(keyword)) {
        return responses[Math.floor(Math.random() * responses.length)]
      }
    }

    // Default responses if no keywords match
    const defaultResponses = [
      "I'm not sure I understand. Could you rephrase your question?",
      "That's a great question! You might find the answer in our FAQ section, or you can fill out the contact form for more specific help.",
      "I'd be happy to help with that. Could you provide more details about what you're looking for?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setIsMinimized(false)
    } else {
      setIsMinimized(!isMinimized)
    }
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-salmon hover:bg-salmon/90 text-white shadow-lg"
          aria-label="Open chat assistant"
        >
          <Bot size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-full sm:w-80 md:w-96 max-h-[500px] border border-gray-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-salmon text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <span className="font-medium">Beyond Measure Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleChat}
                className="text-white/90 hover:text-white"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button onClick={closeChat} className="text-white/90 hover:text-white" aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          {!isMinimized && (
            <div className="flex-1 p-3 overflow-y-auto max-h-[350px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-sky text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Chat input */}
          {!isMinimized && (
            <div className="border-t border-gray-200 p-3">
              <div className="flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sky"
                />
                <Button
                  onClick={handleSendMessage}
                  className="rounded-l-none bg-sky hover:bg-sky/90"
                  disabled={inputValue.trim() === ""}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

