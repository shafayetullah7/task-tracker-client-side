interface GradientTextProps {
    children: string|JSX.Element;
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