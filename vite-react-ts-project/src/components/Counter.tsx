// import { useState } from 'react';
import { ReactNode } from 'react';

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
};

const Counter = ({ setCount, children }: CounterProps) => {
    // const [count, setCount] = useState<number>(1);

    return (
        <>
            {children}
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </>
    );
};

export default Counter;
