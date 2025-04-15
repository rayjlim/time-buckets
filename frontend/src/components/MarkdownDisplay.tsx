import ReactMarkdown from 'react-markdown';

interface MarkdownDisplayProps {
    source: string;
}

const MarkdownDisplay = ({ source }: MarkdownDisplayProps) => {
    return <ReactMarkdown>{source}</ReactMarkdown>;
};

export default MarkdownDisplay;
