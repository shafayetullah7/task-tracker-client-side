interface GradientTextProps {
    children: string;
}

const GradientText = ({ children }: GradientTextProps) => {
    return (
        <span
            className="gradient-text"
        >
            {children}
        </span>
    )
};

export default GradientText;