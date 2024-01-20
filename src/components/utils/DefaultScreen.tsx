import { ReactNode } from "react";

type TdefaultScreenProps = {
    children: ReactNode
}

const DefaultScreen = ({ children }: TdefaultScreenProps) => {
    return (
        <div className="max-w-[1280px]  mx-auto">
            {children}
        </div>
    );
};

export default DefaultScreen;