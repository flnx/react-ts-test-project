import { useState } from 'react';

// Components
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';

function App() {
    const [count, setCount] = useState<number>(1);

    return (
        <>
            <Heading title={'Hello There!'} />
            <Section title={'Different title'}>This is a Section</Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List
                items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
                render={(item: string) => <span className="gold">{item}</span>}
            />
        </>
    );
}

export default App;
