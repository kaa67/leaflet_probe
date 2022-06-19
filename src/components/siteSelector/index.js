import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

import { sitesListSelector } from '../../store/selectors';

const SiteSelect = ({ index, disabledIndex, onSelect }) => {
    const [value, setValue] = useState(index);
    const { Option } = Select;
    const sitesList = useSelector(sitesListSelector);

    const onChange = (value) => {
        setValue(value);
        onSelect(value);
    };
    
    const onSearch = (value) => {
        console.log('search:', value);
    };
  
    const filterOption = (input, option) => option.children.toLowerCase().includes(
        input.toLowerCase(),
    );

    return (
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            value={value}
        >
            {sitesList.map(
                (site, siteIndex) => {
                    const key = `siteIndex${siteIndex}`;
                    const disabled = site.id === disabledIndex;

                    return (
                        <Option
                            key={key}
                            value={site.id}
                            disabled={disabled}
                        >
                            {site.name}
                        </Option>
                    );
                },
            )}
        </Select>
    );
};

export default SiteSelect;