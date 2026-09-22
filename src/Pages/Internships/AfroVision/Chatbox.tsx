import { useState } from "react";
import { Box, Heading, VStack, Textarea, Button, Flex, Text } from "@chakra-ui/react";

type ChatMBoxProps = {
    cardBg: string;
    accentColor: string;
    textColor: string;
    muted: string;
    isDark: boolean;
};

const ChatBox = ({ cardBg, accentColor, textColor, muted, isDark }: ChatMBoxProps) => {
    const [messages, setMessages] = useState([
        { from: "system", text: "Halo, Have you a question about this internship? Ask away!" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: "user", text: input }]);
        setInput("");
        // Here you could call your backend API to send the question
    };

    const systemBubbleBg = isDark ? 'whiteAlpha.100' : 'blackAlpha.200';

    return (
        <Box
            flex="0 0 300px"
            bg={cardBg}
            p={4}
            borderRadius="0"
            border="2px solid"
            borderColor={accentColor}
            display="flex"
            flexDirection="column"
            color={textColor}
        >
            <Heading as="h3" size="md" mb={4} color={accentColor} fontFamily="mono">
                Ask a Question
            </Heading>

            {/* Messages area */}
            <VStack
                spacing={3}
                align="stretch"
                flex="1"
                overflowY="auto"
                maxH="250px"
                pr={1}
                sx={{
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-thumb": { background: isDark ? "#4a5568" : "#a0aec0", borderRadius: "3px" }
                }}
            >
                {messages.map((msg, i) => (
                    <Flex
                        key={i}
                        justify={msg.from === "user" ? "flex-end" : "flex-start"}
                    >
                        <Box
                            bg={msg.from === "user" ? accentColor : systemBubbleBg}
                            color={msg.from === "user" ? "black" : textColor}
                            px={3}
                            py={2}
                            borderRadius="0"
                            maxW="80%"
                            fontSize="sm"
                        >
                            {msg.text}
                        </Box>
                    </Flex>
                ))}
            </VStack>

            {/* Input area */}
            <VStack spacing={3} mt={3}>
                <Textarea
                    placeholder="Type your question here..."
                    resize="none"
                    bg={isDark ? 'whiteAlpha.100' : 'blackAlpha.100'}
                    color={textColor}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Text fontSize="xs" color={muted} fontFamily="mono">
                    Tip: press Enter to send
                </Text>
                <Button
                    bg={accentColor}
                    color="black"
                    border="2px solid"
                    borderColor={accentColor}
                    borderRadius="0"
                    _hover={{ bg: accentColor, opacity: 0.85 }}
                    w="full"
                    onClick={handleSend}
                    isDisabled={!input.trim()}
                >
                    Send
                </Button>
            </VStack>
        </Box>
    );
};

export default ChatBox;