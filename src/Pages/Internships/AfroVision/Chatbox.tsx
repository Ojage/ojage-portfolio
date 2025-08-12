import { useState } from "react";
import { Box, Heading, VStack, Textarea, Button, Flex, } from "@chakra-ui/react";

type ChatMBoxProps = {
    cardBg: string;
    accentColor: string;
};

const ChatBox = ({ cardBg, accentColor }: ChatMBoxProps) => {
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

    return (
        <Box
            flex="0 0 300px"
            bg={cardBg}
            p={4}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
        >
            <Heading as="h3" size="md" mb={4} color={accentColor}>
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
                    "&::-webkit-scrollbar-thumb": { background: "gray.500", borderRadius: "3px" }
                }}
            >
                {messages.map((msg, i) => (
                    <Flex
                        key={i}
                        justify={msg.from === "user" ? "flex-end" : "flex-start"}
                    >
                        <Box
                            bg={msg.from === "user" ? accentColor : "blackAlpha.400"}
                            color={msg.from === "user" ? "black" : "white"}
                            px={3}
                            py={2}
                            borderRadius="lg"
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
                    bg="blackAlpha.300"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Button
                    colorScheme="green"
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
