import React from 'react';
import { Prompts } from '@ant-design/x';
import type { PromptsProps } from '@ant-design/x';
import {
  BulbOutlined,
  InfoCircleOutlined,
  RocketOutlined,
  SmileOutlined,
} from '@ant-design/icons';


const items: PromptsProps['items'] = [
  {
    key: '1',
    icon: <BulbOutlined style={{ color: '#FFD700' }} />,
    label: 'Ignite Your Creativity',
    description: 'Got any sparks for a new project?',
  },
  {
    key: '2',
    icon: <InfoCircleOutlined style={{ color: '#1890FF' }} />,
    label: 'Uncover Background Info',
    description: 'Help me understand the background of this topic.',
  },
  {
    key: '3',
    icon: <RocketOutlined style={{ color: '#722ED1' }} />,
    label: 'Efficiency Boost Battle',
    description: 'How can I work faster and better?',
  },
  {
    key: '4',
    icon: <SmileOutlined style={{ color: '#52C41A' }} />,
    label: 'Tell me a Joke',
    description: 'Why do not ants get sick? Because they have tiny ant-bodies!',
  },
];

export const PromptsCard = () => {
  return (
    <Prompts
      title="✨ Inspirational Sparks and Marvelous Tips"
      items={items}
      onItemClick={(info) => {
        console.log(`You clicked a prompt: ${info.data.label}`)
      }}
    />
  );
};

