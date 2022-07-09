import { useState } from 'react';

type TopicSelectorProps = {
  className?: string;
  options: Array<any>;
  onSelect?: Function;
};

const TopicSelector: React.FC<TopicSelectorProps> = ({ className, options, onSelect }) => {
  const [selected, setSelected] = useState(options.filter((option: any) => option.selected === true)[0]);
  return (
    <div className={`hn-topic-selector ${className}`}>
      <select
        value={selected.value}
        onChange={(e) => {
          let selectedItem = options.filter((option: any) => option.value === e.target.value)[0];
          if (typeof onSelect === 'function') {
            onSelect(selectedItem);
          }
          setSelected(selectedItem);
        }}
      >
        {options &&
          options.map(({ value, label }: any, index: number) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default TopicSelector;
