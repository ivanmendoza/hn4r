import { useState } from 'react';
import Icon from '../icon';

import './topic-selector.css';

type Topic = {
  label: string;
  value: string;
  icon?: string | null;
  selected?: boolean;
};

type TopicSelectorProps = {
  className?: string;
  options: Array<Topic>;
  defaultValue?: string;
  onSelect?: Function;
};

const TopicSelector: React.FC<TopicSelectorProps> = ({ className, options, onSelect, defaultValue }) => {
  const defaultOption = options.filter((option: any) => option.value === defaultValue)[0];
  const [selected, setSelected] = useState(defaultOption ? defaultOption : options[0]);
  const [listVisible, setListVisible] = useState(false);

  return (
    <div className={`hn-select ${className ? className : ''}  ${listVisible ? 'hn-select-open' : ''}`}>
      <div className="hn-select-box" onClick={() => setListVisible(!listVisible)}>
        <div className="hn-item">
          <Icon className="hn-item-icon" name={selected.icon ? selected.icon : ''} size="16" />
          {selected.label}
        </div>
        <div className="hn-dropdown">
          <Icon className="hn-icon-dropdown" name="dropdown" size="16" />
        </div>
      </div>
      {listVisible && (
        <div className={`hn-select-list  ${listVisible ? 'hn-select-list-visible' : ''}`}>
          {options &&
            options.map(({ value, label, icon }: any, index: number) => {
              return (
                <div
                  className="hn-item"
                  key={value}
                  data-value={value}
                  onClick={(e) => {
                    let selectedItem = options.filter((option: any) => option.value === value)[0];
                    if (typeof onSelect === 'function') {
                      onSelect(selectedItem);
                    }
                    setSelected(selectedItem);
                    setListVisible(false);
                  }}
                >
                  <Icon className="hn-item-icon" name={icon} size="24" />
                  {label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export { TopicSelector as default };
export type { Topic };
