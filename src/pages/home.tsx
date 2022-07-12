import { useState } from 'react';
import { Spacer } from '../components/container';
import News from '../components/news';
import TopicSelector from '../components/topicSelector';
import { DEFAULT_TOPICS } from '../constants';
import { useConfigManager } from '../hooks/use-storage-managers';

/** @module HomePage */

/**
 * Home page component. Handles the integration between `TopicSelector` and `News` components.
 * @kind component
 */
const HomePage: React.FC = () => {
  const { get: readConfig, update: updateConfig } = useConfigManager();
  const configTopic = readConfig('topic');
  const savedTopic = configTopic.length > 0 ? configTopic[0].value : DEFAULT_TOPICS[0].value;
  const [topic, setTopic] = useState(savedTopic);
  return (
    <>
      <Spacer type="toolbar">
        <TopicSelector
          options={DEFAULT_TOPICS}
          defaultValue={topic}
          onSelect={({ value }: any) => {
            updateConfig({ option: 'topic' }, { option: 'topic', value: value });
            setTopic(value);
          }}
        />
      </Spacer>
      <News topic={topic} />
    </>
  );
};

export { HomePage };
