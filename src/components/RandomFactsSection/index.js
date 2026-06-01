import { useState } from "react";
import {
    FactCard,
    PortfolioQuoteWrapper,
    ContextLabel,
    AccentLine,
    SectionLabel,
    QuoteCard,
    QuoteContent,
    QuoteBodyBlock,
    QuoteText,
    QuoteFooter,
    RefreshButton,
    RefreshIcon,
} from "./RandomFactsCard";

export default function RandomFactsSection() {
    const facts = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "Programs must be written for people to read, and only incidentally for machines to execute.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "First, solve the problem. Then, write the code.",
        "Simplicity is the soul of efficiency.",
        "Before software can be reusable it first has to be usable.",
        "Make it work, make it right, make it fast.",
        "Deleted code is debugged code.",
        "Programming isn't about what you know; it's about what you can figure out.",
        "The best error message is the one that never shows up.",
        "Simplicity is the ultimate sophistication.",
        "The function of good software is to make the complex appear simple.",
        "Talk is cheap. Show me the code.",
        "Code never lies, comments sometimes do.",
        "Fix the cause, not the symptom.",
        "Good code is its own best documentation.",
        "Weeks of coding can save you hours of planning.",
        "There is always one more bug.",
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "Experience is the name everyone gives to their mistakes.",
        "The most important skill for a programmer is the ability to learn.",
        "The best programs are the ones that evolve over time.",
        "Perfection is achieved not when there is nothing more to add, but when there is nothing left to remove.",
        "Software is never finished, only released.",
        "If it works, don’t touch it… unless you know why you’re touching it.",
        "Programming is thinking, not typing.",
        "Debugging is twice as hard as writing the code in the first place.",
        "Good architecture lets you defer decisions.",
        "Write code as if the person maintaining it is a violent psychopath who knows where you live.",
        "A language that doesn’t affect the way you think about programming is not worth knowing.",
        "Rules are meant to be broken — but not naming conventions.",
        "Code for humans, not machines.",
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      ];

    const [fact, setFact] = useState(facts[0]);

    const fetchFact = () => {
        setFact(facts[Math.floor(Math.random() * facts.length)]);
    };

    return (
        <FactCard id="random-facts">
            <PortfolioQuoteWrapper id="portfolio-quote-wrapper">
                <QuoteCard id="quote-card">
                    <ContextLabel id="context-label">
                        <AccentLine />
                        <SectionLabel>Random Thought</SectionLabel>
                    </ContextLabel>

                    <QuoteContent id="quote-content">
                        <QuoteBodyBlock id="quote-body-block">
                            <QuoteText id="quote-text">{fact}</QuoteText>
                        </QuoteBodyBlock>

                        <QuoteFooter id="quote-footer">
                            <div>
                            </div>

                            <RefreshButton
                                id="refresh-btn"
                                onClick={fetchFact}
                                aria-label="Next quote"
                            >
                                <span>New thought</span>
                                <RefreshIcon />
                            </RefreshButton>
                        </QuoteFooter>
                    </QuoteContent>
                </QuoteCard>
            </PortfolioQuoteWrapper>
        </FactCard>
    );
}
