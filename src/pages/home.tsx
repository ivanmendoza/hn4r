import { useState } from 'react';
import { Spacer } from '../components/container';
import News from '../components/news';
import TopicSelector, { Topic } from '../components/topicSelector';
import { useConfigManager } from '../hooks/use-storage-managers';

const topics: Array<Topic> = [
  {
    label: 'Angular',
    value: 'angular',
    icon: 'logo-angular',
  },
  {
    label: 'Reactjs',
    value: 'reactjs',
    icon: 'logo-react',
  },
  {
    label: 'Vuejs',
    value: 'vuejs',
    icon: 'logo-vuejs',
  },
];

export const HomePage: React.FC = () => {
  const { get: readConfig, update: updateConfig } = useConfigManager();
  const configTopic = readConfig('topic');
  const savedTopic = configTopic.length > 0 ? configTopic[0].value : topics[0].value;
  const [topic, setTopic] = useState(savedTopic);
  return (
    <>
      <Spacer type="toolbar">
        <TopicSelector
          options={topics}
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
