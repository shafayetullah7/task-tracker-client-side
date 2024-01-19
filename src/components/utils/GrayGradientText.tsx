interface GradientTextProps {
    children: string;
}

const GrayGradientText = ({ children }: GradientTextProps) => {
    return (
        <span
            className="gray-gradient-text"
        >
            {children}
        </span>
    )
};

export default GrayGradientText;